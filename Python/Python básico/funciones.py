def greet(name, last_name = 'Sin apellido'):
  print('Hola', name, last_name)

greet('David', 'Aristizabal')
greet('Carli', 'Florida')

greet('Diego')

greet(last_name='Aristizabal', name='David')

print('-' * 50)

# Funciones que retornan valores
def add(a, b):
  return a + b

def substract(a, b):
  return a - b

def multiply(a, b):
  return a * b

def divide(a, b):
  return a / b

def calculator():
  while True:
    print('Selecciones una operación')
    print('1. Suma')
    print('2. Resta')
    print('3. Multiplicación')
    print('4. División')
    print('5. Salir')

    option = int(input('Ingrese el número de la opción:\n'))

    if option == 5:
      print('Saliendo de la calculadora')
      break
    elif option > 5:
      print('Valor invalido')
    
    num1 = float(input('Ingrese el primer número:\n'))
    num2 = float(input('Ingrese el segundo número:\n'))

    if option == 1:
      print('La suma es:',add(num1, num2))
    elif option == 2:
      print('La resta es:',substract(num1, num2))
    elif option == 3:
      print('La multiplicación es:',multiply(num1, num2))
    elif option == 4:
      print('La división es:',divide(num1, num2))

calculator()




