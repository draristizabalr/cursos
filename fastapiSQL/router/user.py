from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from models.user import Base
from config.db import SessionLocal, engine
from config.crud import get_users, get_user_by_email, get_user_by_id, create_user
from schemas.users import User, UserCreate

Base.metadata.create_all(bind=engine)

# Dependencies


def get_db():
    db = SessionLocal()
    try:
        return db
    except Exception as error:
        print(error)
        db.close()


user = APIRouter(prefix="/users", tags=["users"])


@user.get("/", response_model=list[User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = get_users(db, skip=skip, limit=limit)
    return users


@user.get("/user", response_model=User)
def read_user(id: int = None, email: str = '', db: Session = Depends(get_db)):
    if id != None:
        return get_user_by_id(db, user_id=id)
    elif email != '':
        return get_user_by_email(db, email=email)
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="You don't give a id or a email to search")


@user.post("/", response_model=User)
def create_db_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return create_user(db=db, user=user)
