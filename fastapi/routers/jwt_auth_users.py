from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import jwt
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from datetime import datetime, timedelta, UTC

ALGORITHM = "HS256"
ACCESS_TOKEN_DURATION = 5
SECRET = "5f936053b19d7410891b11edc0bc55c978a400c8e2f74e63f24cbd42bdb72592"

router = APIRouter(
    prefix="/jwt",
    tags=["login", "jwt"]
)

oauth2 = OAuth2PasswordBearer(tokenUrl="login")

crypt = CryptContext(schemes=["bcrypt"])

class User(BaseModel):
    username: str
    full_name: str
    email: str
    disabled: bool

class UserDB(User):
    password: str
  
users_db: object = {
    "mouredev": {
        "username": "mouredev",
        "full_name": "Brais Moure",
        "email": "braismoure@mourede.com",
        "disabled": False,
        "password": "$2a$12$CjGezNDY3UEa9pwLLFwbIeyNFfj/3wPncvEGjwHF.oIGpbxnLCafK"
    },
    "mouredev2": {
        "username": "mouredev2",
        "full_name": "Brais Moure 2",
        "email": "braismoure@mourede.com",
        "disabled": True,
        "password": "$2a$12$ELX1juV.yXy338Qx9NUG0u7VCy.DQCmahw21qZCyVmzBk7B9rh22K"
    }
}

def search_user_db(username: str):
    if username in users_db:
        return UserDB(**users_db[username])

def search_user(username: str):
    if username in users_db:
        return User(**users_db[username])
    
async def auth_user(token: str = Depends(oauth2)):
    try:
        username = jwt.decode(token, SECRET, algorithms=[ALGORITHM]).get("sub")
        if username is None:
            raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Credenciales de autenticaión inválidas",
                    headers={"WWW-Authenticate": "Bearer"}
                )
        
    except InvalidTokenError:
        raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="El token a expirado",
                    headers={"WWW-Authenticate": "Bearer"}
                )
    
    return search_user(username)
            
async def current_user(user: User = Depends(auth_user)):    
    if user.disabled:
        raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Usuario inactivo"
            )
    
    return user

@router.post('/login')
async def login(form: OAuth2PasswordRequestForm = Depends()):
    user_db = users_db.get(form.username)
    if not user_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El nombre de usuario no está registrado"
        )
    
    user = search_user_db(form.username)
    
    if not crypt.verify(form.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="La contraseña no es correcta"
        )
    
    access_token = {
      "sub": user.username,
      "exp": datetime.now(UTC) + timedelta(minutes=ACCESS_TOKEN_DURATION),      
    }
    
    token = jwt.encode(access_token, SECRET, algorithm=ALGORITHM)
    
    return { "access_token": token, "token_type": "bearer"}

@router.get("/users/me")
async def me(user: User = Depends(current_user)):
    return user