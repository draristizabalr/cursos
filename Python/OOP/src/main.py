from oop.data.persistencia import Persistencia
from oop.exceptions.biblioteca_error import BibliotecaError
from oop.models.libros import Libro
from oop.models.usuarios import Usuario

# biblioteca = Biblioteca("Platzi Biblioteca")

# biblioteca.usuarios = data_estudiantes
# biblioteca.libros = data_libros
persistencia = Persistencia()
# persistencia.guardar_datos(biblioteca)
biblioteca = persistencia.cargar_datos()

# try:
#     print(estudiante.solicitar_libro(None))
# except BibliotecaError as e:
#     print(f"error: {e} de tipo {type(e)}")


# try:
#     print(estudiante.devolver_libro("Libro"))
# except BibliotecaError as e:
#     print(f"error: {e} de tipo {type(e)}")


# print(biblioteca.libros_disponibles())

print("Bienvenido a Platzi biblioteca")
print("Los libros disponibles son:\n")
for libro in biblioteca.libros_disponibles():
    print(libro.descripcion_completa)

libro_no_disponible = Libro.crear_libro_no_disponible("Libro", "David", "1234567890")
print(libro_no_disponible.disponible)

usuario: Usuario
libro: Libro
while True:
    try:
        cedula = int(input("Digite la cédula del usuario al que quiere buscar:\n"))
        usuario = biblioteca.buscar_usuario(cedula)
        break
    except ValueError:
        print(
            "Valor ingresado invalido. Únicamente se aceptan números (sin letras ni caracteres especiales ni espacios)"
        )
    except BibliotecaError as e:
        print(e)

while True:
    titulo = input("Título del libro a buscar:\n").lower()
    try:
        libro = biblioteca.buscar_libro(titulo)
        break
    except BibliotecaError as e:
        print(e)

print(usuario.solicitar_libro(libro.titulo))
libro.prestar()
