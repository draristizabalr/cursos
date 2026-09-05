import statistics
import csv

file_path = 'monthly_sales.csv'
monthly_sales = {}
with open(file_path, mode='r') as file:
  csv_reader = csv.DictReader(file)
  for row in csv_reader:
    month = row['month']
    sales = float(row['sales'])
    monthly_sales[month] = sales

sales = list(monthly_sales.values())
print(sales)

# Hallar la media
mean_sales = statistics.mean(sales)
print(f'La media es: {mean_sales}')

# Hallar la mediana
median_sales = statistics.median(sales)
print(f'La mediana es: {median_sales}')

# Hallar la moda
mode_sales = statistics.mode(sales)
print(f'La moda es: {mode_sales}')

# Desviación standart
standart = statistics.stdev(sales)
print(f'La desviación estándar es: {standart}')

# Varianza
varianza = statistics.variance(sales)
print(f'La varianza es: {varianza}')

# Máximo y mínimo de ventas
max_sales = max(sales)
min_sales = min(sales)
print(f'El máximo de ventas fue: {max_sales}')
print(f'El mínimo de ventas fue: {min_sales}')

# Rango de ventas
range_sales = max_sales - min_sales
print(f'El rango de ventas fue: {range_sales}')
