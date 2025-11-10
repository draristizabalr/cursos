import csv

# Leer un archivo
"""with open('products.csv', mode='r') as file:
  csv_reader = csv.DictReader(file)
  for row in csv_reader:
    print(row)"""

# Mostrar la información por columnas
"""with open('products.csv', mode='r') as file:
  csv_reader = csv.DictReader(file)
  for row in csv_reader:
    print(f"Producto: {row['name']}, Price: {row['price']}")"""

# Añadir un nuevo registro al csv
"""new_product = {
  'name': 'Wireless Charger',
  'price': 75,
  "quantity": 100,
  "brand": 'ChargerMaster', 
  "category": 'Accessories', 
  "entry_date": '2024-07-01'
}

with open('products.csv', mode="a", newline='') as file:
  csv_writer = csv.DictWriter(file, fieldnames=new_product.keys())
  csv_writer.writerow(new_product)"""

# Añadir una nueva columna
file_path = 'products.csv'
update_file_path = 'products_updated.csv'

with open(file_path, mode='r') as file:
  csv_reader = csv.DictReader(file)
  fieldnames = csv_reader.fieldnames + ['total_value', 'iva']

  with open(update_file_path, mode='w', newline='') as update_file:
    csv_writer = csv.DictWriter(update_file, fieldnames=fieldnames)
    csv_writer.writeheader()

    for row in csv_reader:
      row['total_value'] = float(row['price']) * int(row['quantity'])
      row['iva'] = float(row['price']) * 0.19
      csv_writer.writerow(row)
    
with open(update_file_path, mode='r') as update_file_finished:
  csv_update_reader = csv.DictReader(update_file_finished)
  for row in csv_update_reader:
    print(row)