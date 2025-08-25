# Ejemplo de iterador

# Crear una lista
my_list = [1,2,3,4]

# Obtener el iterador
my_iter = iter(my_list)

# Usar el iterador
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
print(next(my_iter))

print('-'*50)
# Iterar en cadenas
# Creando la cadena
text = 'Hola mundo'

# Creando iterador
iter_text = iter(text)

# Iterar en la cadena
for char in iter_text:
  print(char)

print('-'*50)

# Crear un iterador para los números impares
# Limite
limit = 10

# Crear iterador
odd_itter = iter(range(1, limit + 1, 2))

# Usar el iterador
for num in odd_itter:
  print(num)

print('-'*25, 'Generadores', '-'*25)

# Generador
def my_generator():
  yield 1
  yield 2
  yield 3

for value in my_generator():
  print(value)

print('-'*50)
# Fibonacci
# 0 1 1 2 3 5 8 13 ...
def fibonacci(limit):
  a, b = 0, 1
  while a < limit:
    yield a
    a, b = b, a + b

for num in fibonacci(10):
  print(num)