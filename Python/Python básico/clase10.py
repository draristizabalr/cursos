numbers = {1: "uno", 2: "dos", 3: "tres"}
print(numbers[2])

information = {"nombre": "David", "apellido": "Aristizabal", "edad": 33, "altura": 1.76}
print(information)
del information["edad"]
print(information)
claves = information.keys()
print(claves)
values = information.values()
print(values)

contactos = {
    'David': {"nombre": "David", "apellido": "Aristizabal", "edad": 33, "altura": 1.76},
    'Carlar': {"nombre": "Carla", "apellido": "Florida", "edad": 29, "altura": 1.60},
}
print(contactos["David"])
