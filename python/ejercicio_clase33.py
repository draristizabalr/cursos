"""
  Crear un script en python que convierta archivos .csv a .json y vicerversa
"""

import csv
import json

# Tomar el valor del nombre del archivo
while True:
  file_path = input('Da el nombre del archivo, con su extensión (.csv o .json):\n')

  file_path_array = file_path.split('.')

# Verificar si el nombre dado tiene la extensión del archivo
  if (len(file_path_array) < 2):

# El archivo no tiene extensión
    print('El nombre del archivo no tiene extensión')

# Ya verificado que tiene extensión entonces se verifica que sea .csv o .json
  elif (file_path.endswith('.csv') | file_path.endswith('.json')):

# Verificado que tiene extensión y que es .csv o .json, verificamos que el archivo exista en la carpeta
    try:
      with open(file_path, mode='r') as file:
        print('Archivo leido con exito')
        break
    except Exception:

# El archivo no existe en la carpeta
      print('El archivo no existe o no está en esta carpeta')

# El archivo no tiene extensión .csv o .json
  else:
    print('El archivo no es un csv o json')

# Se guardan los valores del archivo, ya que se han verificado que están correctos
filename = ".".join(file_path_array[0:-1])
file_extension = file_path_array[-1]

# Convertir un archivo .csv a .json
if file_extension == 'csv':

# Leer el contenido del archivo csv
  with open(file_path, mode='r') as original_file:
    csv_reader = csv.DictReader(original_file)

# El nombre del nuevo archivo .json
    new_file_path = f'{filename}.json'

# Crear el nuevo archivo json
    with open(new_file_path, mode='w') as new_file:

# Crear el formato json para escribir en el nuevo archivo
      json_format = []
      for row in csv_reader:
        json_format.append(row)
      
# Se escriben los valore en el nuevo archivo
      json.dump(json_format, new_file, indent=4)

# Convertir un archivo .json a .csv
else:

# Leer el archivo .json
  with open(file_path, mode='r') as original_file:
    json_reader = json.load(original_file)

# El nombre del nuevo archivo .csv
    new_file_path = f'{filename}.csv'

# Se crea el nuevo archivo .csv
    with open(new_file_path, mode='w', newline='') as new_file:

# Tomamos los títulos de las columnas
      fieldnames = json_reader[0].keys()

# Escribimos los títulos de las columnas
      csv_writer = csv.DictWriter(new_file, fieldnames=fieldnames)

# Se escriben, una a una, los valores de las filas
      for row in json_reader:
        csv_writer.writerow(row)