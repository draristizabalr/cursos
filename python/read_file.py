# Leer un archivo linea por linea
"""with open('cuento.txt', 'r') as file:
  for lines in file:
    print(lines.strip())"""

"""with open('cuento.txt', 'r') as file:
  lineas = file.readlines()
  print(lineas)"""

# Añadir nuevo texto
"""with open('cuento.txt', 'a') as file:
  file.write("\n\nBy: ChatGPT")"""

# Sobreescribir el texto
with open('cuento.txt', 'w') as file:
  file.write("\n\nBy: ChatGPT")