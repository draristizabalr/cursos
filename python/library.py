from typing import List

class Book:
  def __init__(self, title: str, author: str):
    self.title  = title
    self.author = author
    self.available = True

  def borrow(self):
    if self.available:
      self.available = False
      print(f'El libro {self.title} ha sido prestado')
    else:
      print(f'El libro {self.title} no está disponible')

  def return_book(self):
    self.available = True
    print(f'El libro {self.title} ha sido devuelto')

class User:
  def __init__(self, name: str, user_id: str):
    self.name = name
    self.user_id = user_id
    self.borrowed_books = []

  def borrow_book(self, book: Book):
    if book.available:
      book.borrow()
      self.borrowed_books.append(book)
  
  def return_book(self, book: Book):
    if book in self.borrowed_books:
      book.return_book()
      self.borrowed_books.remove(book)

class Library:
  def __init__(self):
    self.books: List[Book] = []
    self.users: List[User] = []

  def add_book(self, book: Book):
    self.books.append(book)
    print(f'El libro {book.title} ha sido agregado')
  
  def register_user(self, user: User):
    self.users.append(user)
    print(f'El usuario {user.name} ha sido registrado')

  def show_available_books(self):
    print('Los libros disponibles son')
    for book in self.books:
      if book.available:
        print(f'{book.title} por {book.author}')
        
# Crear libros
book1 = Book('El principito', 'Antoine de Saint-Exupéry')
book2 = Book('1984', 'George Orwell')

# Crear usuarios
user1 = User('David', '001')
user2 = User('Carli', '002')

# Crear biblioteca
library = Library()
library.add_book(book1)
library.add_book(book2)
library.register_user(user1)
library.register_user(user2)

# Mostrar libros
library.show_available_books()

# Realizar prestamo
user1.borrow_book(book1)

# Mostrar libros
library.show_available_books()

# Retornar libro
user1.return_book(book1)

# Mostrar libros
library.show_available_books()


