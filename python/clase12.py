numbers = [1, 2, 3, 4, 5, 6]
for i in numbers:
  print('Aqui i es igual a:', i)

for i in range(10):
  print(i)

fruits = ['Manizales', 'Pera', 'Uva', 'Naranja', 'Tomate']
for fruit in fruits:
  if fruit == 'Naranja':
    print('Naranja encontrada')
  else:
    print('Naranja no encontrada')

x = 0
while x < 5:
  if x == 3:
    break
  print(x)
  x += 1

for i in numbers:
  if i == 3:
    continue
  print('Aqui i es igual a:', i)
