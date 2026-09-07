from typing import TypedDict


class UsuarioDict(TypedDict):
    nombre: str
    cedula: int
    carrera: str
    libros_prestados: list[str]


class LibroDict(TypedDict):
    titulo: str
    autor: str
    isbn: str
    disponible: bool
    veces_prestado: int


class DatosBiblioteca(TypedDict):
    nombre: str
    usuarios: list[UsuarioDict]
    libros: list[LibroDict]
    fecha_guardado: str
