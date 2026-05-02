import os

# Obtener el directorio actual
cwd = os.getcwd()
print('Directorio de trabajo actual', cwd)

# Listar los archivos .txt
txt_files = [f for f in os.listdir('.') if f.endswith('.txt')]
print('Archivos txt:', txt_files)

# Renombrar archivos
os.rename('cuento.txt', 'caperucita.txt')
print('Archivo renombrado')