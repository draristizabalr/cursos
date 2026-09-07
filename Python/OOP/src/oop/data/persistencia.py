import json
from datetime import datetime
from zoneinfo import ZoneInfo

from oop.data.data_model import DatosBiblioteca
from oop.models.biblioteca import Biblioteca
from oop.models.libros import LibroFisico
from oop.models.usuarios import Estudiante, Profesor

TZ_BOGOTA = ZoneInfo("America/Bogota")


class Persistencia:
    def __init__(self, archivo: str = "biblioteca.json") -> None:
        self.archivo = archivo

    def guardar_datos(self, biblioteca: Biblioteca) -> None:
        datos = {
            "nombre": biblioteca.nombre,
            "usuarios": [usuario.__dict__ for usuario in biblioteca.usuarios],
            "libros": [libro.__dict__ for libro in biblioteca.libros],
            "fecha_guardado": datetime.now(tz=TZ_BOGOTA).isoformat(),
        }

        with open(self.archivo, "w", encoding="utf-8") as f:
            json.dump(datos, f, indent=2, ensure_ascii=False)

    def cargar_datos(self) -> Biblioteca:
        with open(self.archivo, "r", encoding="utf-8") as f:
            datos: DatosBiblioteca = json.load(f)

        biblioteca = Biblioteca(datos["nombre"])
        for dato_libro in datos["libros"]:
            libro = LibroFisico(
                titulo=dato_libro["titulo"],
                autor=dato_libro["autor"],
                isbn=dato_libro["isbn"],
                disponible=dato_libro["disponible"],
            )
            biblioteca.libros.append(libro)

        for dato_usuario in datos["usuarios"]:
            if "carrera" in dato_usuario:
                usuario = Estudiante(
                    nombre=dato_usuario["nombre"],
                    cedula=dato_usuario["cedula"],
                    carrera=dato_usuario["carrera"],
                )
            else:
                usuario = Profesor(
                    nombre=dato_usuario["nombre"],
                    cedula=dato_usuario["cedula"],
                )
            biblioteca.usuarios.append(usuario)

        return biblioteca
