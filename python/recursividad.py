def factorial(number):
  if number == 1 or number == 0:
    return 1
  return factorial(number - 1) * number

print(factorial(4))

def fibonacci(limit):
  if limit == 0:
    return 0
  if limit == 1:
    return 1
  
  return fibonacci(limit - 1) + fibonacci(limit - 2)

for i in range(0, 20):
  print(fibonacci(i))

# Tarea: Crea una función (RECURSIVA) que entre la sumatoria de un número entero
def sumatory(number):
  if number < 0:
    raise ValueError()
  if number == 0:
    return 0
  return sumatory(number - 1) + number

while True:
  try:
    number = input('Ingrese un número entero el cual quiera encontrar la sumatoria:\n').lower()
    if number == 'salir':
      print('Saliendo del proceso')
      break
    number = int(number)
    print('El resultado de la sumatoria es:', sumatory(int(number)))
  except ValueError:
    print('El número debe ser un número entero, positivo')
  
