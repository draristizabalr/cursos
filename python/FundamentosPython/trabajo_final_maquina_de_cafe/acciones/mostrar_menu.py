import opciones

def mostrar_menu():
    print("\n"+"*"*5, "Opciones", "*"*5, "\n")
    for opcion, opcion_maquina in opciones.OPCIONES_MAQUINA.items():
        print(f"{opcion}. {opcion_maquina["descripcion"]}")
    print("\n")
    