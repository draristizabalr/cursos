from datetime import datetime

def pedir_cafe(opciones_cafe: dict[str, str], ARCHIVO_PEDIDOS):
    print("Selecciona el café que deseas pedir:")

    while True:
        for opcion, cafe in opciones_cafe.items():
            print(f"{opcion}. {cafe}")
        opcion_usuario = input('Selecciona una opción: ')
        if opcion_usuario not in opciones_cafe:
            print("Opción invalida, por favor selecciona una opción valida")
        else:
            break

    if opcion_usuario == "5":
        from acciones.inicio_maquina import inicio_maquina

        inicio_maquina()
        return
    
    cafe_pedido = opciones_cafe[opcion_usuario]
    
    print("↓" + "-↓" * 10)
    print("Has pedido un " + cafe_pedido)
    print("-" * 21)    
    
    with open(ARCHIVO_PEDIDOS, "a", encoding="utf-8") as archivo:
        log_pedido = { "fecha": datetime.now().isoformat(),"pedido": cafe_pedido }
        archivo.write(f"\n{str(log_pedido)}")

