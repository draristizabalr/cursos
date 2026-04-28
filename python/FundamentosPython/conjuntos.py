frutas = {"manzana", "banana", "cereza"}
print(frutas)

frutas.add("uva")
print(frutas)

frutas.update({"naranja", "mango"})
print(frutas)

frutas.remove("banana")
print(frutas)

frutas.discard("cereza")
print(frutas)

frutas.pop()
print(frutas)

frutas.clear()
print(frutas)


print("-" * 20)

a = {1, 2, 3}
b = {3, 4, 5}

print("El conjunto a es: ", a)
print("El conjunto b es: ", b)

print("-" * 20)

print("La unión de a y b es: ", a | b) # Union de conjuntos
print("La intersección de a y b es: ", a & b) # Intersección de conjuntos
print("La diferencia de a y b es: ", a - b) # Diferencia de conjuntos
print("La diferencia de b y a es: ", b - a) # Diferencia de conjuntos
print("La diferencia simétrica de a y b es: ", a ^ b) # Diferencia simétrica de conjuntos