from fastapi import APIRouter, HTTPException, status
from db.models.user import User
from db.client import db_client
from db.schemas.user import user_schema, users_schema
from bson import ObjectId

router = APIRouter(tags=["users", "mongo"],
                   prefix="/user_db",
                   responses={status.HTTP_404_NOT_FOUND: {"message": "No encontrado"}})

def search_user(field: str, key):
  try:
    user = db_client.users.find_one({field: key})
    return User(**user_schema(user))
  except:
    return { "error": "No se ha encontrado el usuario"}

@router.get("/", response_model=list[User])
async def users():
  return users_schema(db_client.users.find())

@router.get('/user/{id}') # Path
async def user(id: str):
    print("Inside user_db/{id}")
    return search_user("_id", ObjectId(id))
     
@router.get('/userquery') #Query
async def user(id: str):
    print("Inside userquery route")
    return search_user("_id", ObjectId(id))

@router.post('/', response_model=User, status_code=status.HTTP_201_CREATED)
async def user(user: User):
    
    if type(search_user("email", user.email)) == User:
      raise HTTPException(status_code=status.HTTP_302_FOUND,
                          detail="El usuario ya existe")
    
    user_dict = dict(user)
    del user_dict["id"]    
    
    id = db_client.users.insert_one(user_dict).inserted_id
    
    new_user = user_schema(db_client.users.find_one({"_id": id}))
      
    return User(**new_user)

@router.put('/')
async def user(user: User):
  user_dict = dict(user)
    
  try:
    db_client.users.find_one_and_replace({"_id": ObjectId(user.id)}, user_dict)
  except:
    return { "error": "No se ha actualizado al usuario"}
  
  return search_user("_id", ObjectId(user.id))

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def user(id: str):
  found = db_client.users.find_one_and_delete({"_id": ObjectId(id)})
  
  if not found:
    return { "error": "No se ha encontrado el usuario"}
      