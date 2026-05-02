from acciones.mostrar_menu import mostrar_menu
from opciones import OPCIONES_MAQUINA

def inicio_maquina():
    print("\nBienvenido a la máquina de café")
    while True:
        # Mostrar el menú
        mostrar_menu()
        opcion = input("Selecciona una opción: ")
        if opcion not in OPCIONES_MAQUINA:
            print("Opción invalida, por favor selecciona una opción valida")
        else:
            print("\n")
            break

    OPCIONES_MAQUINA[opcion]["accion"]()
