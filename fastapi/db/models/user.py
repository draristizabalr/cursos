from pydantic import BaseModel

# Entidad user
class User(BaseModel):
  id: int
  username: str
  email: str
