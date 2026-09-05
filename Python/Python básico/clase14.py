squares = [x**2 for x in range(1, 11)]
print("Cuadrados:", squares)
print("-" * 50)

celsius = [x * 10 for x in range(0, 5)]
fahrenheit = [(c * 9 / 5) + 32 for c in celsius]
print(celsius)
print(fahrenheit)
print("-" * 50)

evens = [num * 2 for num in range(0, 10)]
print(evens)
odds_1 = [num for num in range(0, 20) if num % 2 == 1]
print(odds_1)
odds_2 = [(num * 2) + 1 for num in range(0, 10)]
print(odds_2)
print("-" * 50)

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

transposed = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(matrix)
print(transposed)
