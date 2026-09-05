with open('cuento.txt', 'r') as file:
  count_lines = 0
  for line in file:
    count_lines += 1
  
  print("Número de lineas que tiene el cuento:\n", count_lines, sep='')