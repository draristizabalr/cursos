from oop.exceptions.biblioteca_error import (
    LibroNoDisponibleError,
    LibroNoEncontradoError,
    UsuarioNoEncontradoError,
)
from oop.models.libros import Libro
from oop.models.usuarios import Usuario


class Biblioteca:
    def __init__(self, nombre: str) -> None:
        self.nombre = nombre
        self.libros: list[Libro] = []
        self.usuarios: list[Usuario] = []

    def libros_disponibles(self) -> list[Libro]:
        return [libro for libro in self.libros if libro.disponible]

    def buscar_usuario(self, cedula: int) -> Usuario:
        for usuario in self.usuarios:
            if usuario.cedula == cedula:
                return usuario

        raise UsuarioNoEncontradoError(
            f"El usuario con cédula {cedula} no fué encontrado"
        )

    def buscar_libro(self, titulo: str) -> Libro:
        for libro in self.libros:
            titulo_libro = libro.titulo.lower()
            if titulo_libro == titulo and libro.disponible:
                return libro
            else:
                raise LibroNoDisponibleError(
                    f"El libro con título '{titulo.title()}' no está disponible"
                )

        raise LibroNoEncontradoError(
            f"El libro con título '{titulo.title()}' no fue encontrado"
        )

    @staticmethod
    def validar_isbn(isbn: str) -> int:
        return len(isbn) > 10
