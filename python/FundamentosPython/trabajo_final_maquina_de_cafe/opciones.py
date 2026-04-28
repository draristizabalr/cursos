from acciones.pedir_cafe import pedir_cafe
from acciones.salir import salir
from acciones.ver_historial import ver_historial

OPCIONES_CAFES = {
    "1": "Espresso",
    "2": "Latte",
    "3": "Cappuccino",
    "4": "Americano",
    "5": "Regresar al menú anterior"
}

OPCIONES_MAQUINA = {
    "1": { "descripcion": "Pedir un café", "accion": lambda: pedir_cafe(OPCIONES_CAFES, ARCHIVO_PEDIDOS)},
    "2": { "descripcion": "Ver el historial", "accion": lambda: ver_historial(ARCHIVO_PEDIDOS)},
    "3": { "descripcion": "Salir", "accion": salir},
}
ARCHIVO_PEDIDOS = "pedidos.txt"