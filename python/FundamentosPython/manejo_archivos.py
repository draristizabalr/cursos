# open(nombre, modo)

# R (read) Lectura
# W (write) Escritura
# A (append) Escritura al final del archivo
# X (Crea archivo nuevo)

try:
    print("*"*5,"Iniciando lectura, línea por línea, del archivo","*"*5)
    with open("archivo.txt", "r", encoding="utf-8") as archivo:
        print(archivo.readline())
        print(archivo.readline())
except FileNotFoundError:
    print("No se ha encontrado el archivo")
finally:
    print("*"*5,"Proceso de lectura completado","*"*5, "\n")

try:
    print("*"*5,"Iniciando lectura, de todas las líneas como lista, del archivo","*"*5)
    with open("archivo.txt", "r", encoding="utf-8") as archivo:
        print(archivo.readlines())
except FileNotFoundError:
    print("No se ha encontrado el archivo")
finally:
    print("*"*5,"Proceso de lectura completado","*"*5, "\n")

try:
    print("*"*5,"Iniciando lectura, de todo el archivo como string, del archivo","*"*5)
    with open("archivo.txt", "r", encoding="utf-8") as archivo:
        print(archivo.read())
except FileNotFoundError:
    print("No se ha encontrado el archivo")
finally:
    print("*"*5,"Proceso de lectura completado","*"*5, "\n")

try:
    print("*"*5,"Iniciando escritura del archivo","*"*5)
    with open("archivo.txt", "w", encoding="utf-8") as archivo:
        archivo.write("Hola mundo desde archivo")
    with open("archivo.txt", "r", encoding="utf-8") as archivo:
        print(archivo.read())
    with open("archivo.txt", "a", encoding="utf-8") as archivo:
        archivo.write("\n")
        archivo.write("Esta es otra línea de texto")
    with open("archivo.txt", "r", encoding="utf-8") as archivo:
        print(archivo.read())
except FileNotFoundError:
    print("No se ha encontrado el archivo")
finally:
    print("*"*5,"Proceso de escritura completado","*"*5, "\n")