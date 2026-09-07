from abc import ABC, abstractmethod
from typing import Protocol, override

from oop.exceptions.biblioteca_error import LibroSinPosesionError, TituloBibliotecaError


class SolicitanteProtocol(Protocol):
    def solicitar_libro(self, titulo: str) -> str:
        """Método que debe implementar cualquier colicitante"""
        ...


class UsuarioBase(ABC):
    @abstractmethod
    def solicitar_libro(self, titulo: str | None) -> str:
        pass

    @abstractmethod
    def devolver_libro(self, titulo: str) -> str:
        pass


class Usuario(UsuarioBase):
    def __init__(self, nombre: str, cedula: int) -> None:
        self.nombre = nombre
        self.cedula = cedula
        self.libros_prestados: list[str] = []

    @override
    def solicitar_libro(self, titulo: str | None) -> str:
        if not bool(titulo):
            raise TituloBibliotecaError(
                f"El libro con el título: {titulo}, no es valido"
            )

        return f"Solicitud de libro {titulo} realizado"

    @override
    def devolver_libro(self, titulo: str) -> str:
        if titulo in self.libros_prestados:
            self.libros_prestados.remove(titulo)
            return f"El libro {titulo} ha sido devuelto por {self.nombre}"
        else:
            raise LibroSinPosesionError(f"{self.nombre} no posee el libro '{titulo}'")


class Estudiante(Usuario):
    def __init__(self, nombre: str, cedula: int, carrera: str) -> None:
        super().__init__(nombre, cedula)
        self.carrera = carrera
        self.limite_libros = 3

    @override
    def solicitar_libro(self, titulo: str | None) -> str:
        _ = super().solicitar_libro(titulo)
        assert isinstance(titulo, str)
        if len(self.libros_prestados) < self.limite_libros:
            self.libros_prestados.append(titulo)
            return f"Al estudiante {self.nombre} se le prestado el libro {titulo}"
        else:
            return f"El estudiante {self.nombre} ya tiene la máxima cantidad de libros que se le puede prestar"


class Profesor(Usuario):
    def __init__(self, nombre: str, cedula: int) -> None:
        super().__init__(nombre, cedula)
        self.limite_libros: int | None = None

    @override
    def solicitar_libro(self, titulo: str | None) -> str:
        _ = super().solicitar_libro(titulo)
        assert isinstance(titulo, str)
        self.libros_prestados.append(titulo)
        return f"Al profesor {self.nombre} se le ha prestado el libro {titulo}"


estudiante = Estudiante("Luis", 1029384708, "Sistemas")
profesor = Profesor("Felipe", 2341235)
