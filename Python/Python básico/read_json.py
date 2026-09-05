import json

file_path = 'products.json'
"""with open(file_path, mode='r') as file:
  products = json.load(file)

# Mostrar el contenido
  for product in products:
    # print(product)
    print(f"Product: {product['name']}, Value: {product['price']}")"""

new_product = {
  'name': 'Wireless Charger',
  'price': 75,
  "quantity": 100,
  "brand": 'ChargerMaster', 
  "category": 'Accessories', 
  "entry_date": '2024-07-01'
}

with open(file_path, mode='r') as file:
  products = json.load(file)

products.append(new_product)

with open(file_path, mode='w') as update_file:
  json.dump(products, update_file, indent=4)