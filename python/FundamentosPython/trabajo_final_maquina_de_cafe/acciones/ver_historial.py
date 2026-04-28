def ver_historial(ARCHIVO_PEDIDOS: str):
    print("1. Todo el historial")
    print("2. Ultima cantidad de pedidos")
    print("3. Primera cantidad de pedidos")
    
    while True:
        opcion_historial = input('¿Cómo quiere ver el historial?\n')
        match opcion_historial:
            case "1":
                todo_historial(ARCHIVO_PEDIDOS)
                break
            case "2":
                cantidad_pedidos = int(input("¿Cuantos pedidos finales quiere ver?\n"))
                ultimos_pedidos(cantidad_pedidos, ARCHIVO_PEDIDOS)
                break
            case "3":
                cantidad_pedidos = int(input("¿Cuantos pedidos finales quiere ver?\n"))
                primeros_pedidos(cantidad_pedidos, ARCHIVO_PEDIDOS)
                break
            case _:
                print("Opción invalida. Por favor, seleccionar una opción valida")
                
    
    
def todo_historial(ARCHIVO_PEDIDOS: str):
    with open(ARCHIVO_PEDIDOS, "r", encoding="utf-8") as archivo:
        print(archivo.read())

def ultimos_pedidos(cantidad: int, ARCHIVO_PEDIDOS: str):
    with open(ARCHIVO_PEDIDOS, "r", encoding="utf-8") as archivo:
        lineas = archivo.readlines()
        lineas_especificas = lineas[-cantidad:]
        for line in lineas_especificas:
            print(line)
            
def primeros_pedidos(cantidad: int, ARCHIVO_PEDIDOS: str):
    with open(ARCHIVO_PEDIDOS, "r", encoding="utf-8") as archivo:
        lineas = archivo.readlines()
        lineas_especificas = lineas[:cantidad]
        for line in lineas_especificas:
            print(line)
    
            
        