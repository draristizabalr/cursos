from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Base de datos local
# db_client = MongoClient().local

# Base de datos remota
URI = "mongodb+srv://admin:admin@cursopython.bdb63.mongodb.net/?retryWrites=true&w=majority&appName=CursoPython"
client = MongoClient(URI, server_api=ServerApi('1'))

try:
  client.admin.command('ping')
  print("Connection with MongoDB client success!!!")
  db_client = client["CursoPython"]
except Exception as e:
  print(e)
