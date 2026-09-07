from abc import ABC, abstractmethod
from typing import Literal, Self, override


class LibroBase(ABC):
    @abstractmethod
    def prestar(self) -> None:
        pass


class Libro(LibroBase):
    def __init__(
        self, titulo: str, autor: str, isbn: str, disponible: bool = True
    ) -> None:
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.disponible = disponible
        self.__veces_prestado = 0

    def __str__(self) -> str:
        return f"El libro {self.titulo} escrito por {self.autor}{' no' if not self.disponible else ''} está disponible"

    @classmethod
    def crear_libro_no_disponible(cls, titulo: str, autor: str, isbn: str) -> Self:
        return cls(titulo, autor, isbn, disponible=False)

    def cambiar_disponibilidad(self) -> None:
        self.disponible = not self.disponible

    @override
    def prestar(self) -> None:
        if self.disponible:
            self.disponible = False
            self.__veces_prestado += 1
            print(
                f"{self.titulo} prestado exitosamente. Total prestamos: {self.__veces_prestado}"
            )
        else:
            print(f"El libro {self.titulo} no está disponible en el momento")

    def devolver(self) -> None:
        if not self.disponible:
            self.disponible = True
        else:
            print(
                f"El libro {self.titulo} está disponible, por lo tanto no se puede devolver"
            )

    def calcular_duracion(self) -> str:
        return ""

    @property
    def es_popular(self) -> bool:
        return self.__veces_prestado >= 5

    @property
    def veces_prestado(self) -> int:
        return self.__veces_prestado

    @property
    def descripcion_completa(self) -> str:
        return f"{self.titulo} autor: {self.autor} ISBN: {self.isbn}"

    @veces_prestado.setter
    def veces_prestado(self, veces_prestado: int) -> None:
        if veces_prestado > 0:
            self.__veces_prestado = veces_prestado
        else:
            raise ValueError("El valor de veces prestado debe ser mayor a 0")


class LibroFisico(Libro):
    @override
    def calcular_duracion(self) -> Literal["7 días"]:
        return "7 días"


class LibroDigital(Libro):
    @override
    def calcular_duracion(self) -> Literal["14 días"]:
        return "14 días"
