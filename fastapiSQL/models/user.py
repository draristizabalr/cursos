from sqlalchemy.sql.sqltypes import String, Integer
from sqlalchemy import Column

from config.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    email = Column(String(255), unique=True)
    password = Column(String(255))
