#include <iostream>

/*
	Crear un programa que almacene los precios de 5 articulos
	almacene la cantidad de articulos vendidos para cada articulo en cada sucursal
	Debe almacenar el stock restante de cada articulo por cada sucursal
	tenga en cuenta que posee 4 sucursales distintas
*/

void static TituloProductos(std::string productos[5])
{
	std::cout << "Tienda" << "\t\t";

	for (int i = 0; i < 5; i++)
		std::cout << productos[i] << "\t";

	std::cout << std::endl;
}

// Funcion que muestra todas las ventas de todas las sucursales y todos los productos
void static VentasStockTodasSucursales(std::string nombres[4], std::string productos[5], int matriz[4][5])
{
	TituloProductos(productos);

	for (int i = 0; i < 4; i++)
	{
		std::cout << nombres[i] << "\t\t";
		for (int j = 0; j < 5; j++)
		{
			std::cout << matriz[i][j] << "\t";
		}
		std::cout << std::endl;
	}
	return;
}

void static MenuSucursales(int& opcionSucursal, std::string nombres[4])
{
	std::cin.ignore();
	std::cout << "Seleccione la opcion para la sucursal que quiere mirar:" << std::endl;
	for (int i = 0; i < 4; i++)
	{
		std::cout << i + 1 << ") " << nombres[i] << std::endl;
	}
	std::cin >> opcionSucursal;
	opcionSucursal -= 1;
}

void static MenuProductos(int& opcionProducto, std::string productos[5])
{
	std::cin.ignore();
	std::cout << "Seleccione la opcion del producto que quiere mirar:" << std::endl;
	for (int i = 0; i < 5; i++)
	{
		std::cout << i + 1 << ") " << productos[i] << std::endl;
	}
	std::cin >> opcionProducto;
	opcionProducto -= 1;
}

void static VentasStockPorSucursal(std::string nombres[4], std::string productos[5], int matriz[4][5])
{
	int opcionSucursal = 0;
	MenuSucursales(opcionSucursal, nombres);
	TituloProductos(productos);

	std::cout << nombres[opcionSucursal] << "\t\t";

	for (int i = 0; i < 5; i++)
	{
		std::cout << matriz[opcionSucursal][i] << "\t";
	}
}

void static VentasStockProductoEnSucursal(std::string nombres[4], std::string productos[5], int matriz[4][5], bool esVentas)
{
	int opcionSucursal = 0, opcionProducto = 0;
	MenuSucursales(opcionSucursal, nombres);
	MenuProductos(opcionProducto, productos);

	if (esVentas)
	{
		std::cout << "Las ventas del producto '";
	}
	else
	{
		std::cout << "El stock del producto '";
	}

	std::cout << productos[opcionProducto]
		<< "' en la sucursal '"
			<< nombres[opcionSucursal]
			<< "' es: "
				<< matriz[opcionSucursal][opcionProducto]
				<< std::endl;
}

int static RecaudacionPorSucursal(std::string nombres[4], int opcionSucursal, std::string productos[5], int precios[5], int ventas[4][5])
{
	int recaudo = 0;
	for (int i = 0; i < 5; i++)
	{
		int ventaProducto = 0, precioProducto = 0;
		ventaProducto = ventas[opcionSucursal][i];
		precioProducto = precios[i];
		recaudo += ventaProducto * precioProducto;
	}

	return recaudo;
}

void static MasVentas(std::string nombres[4], int ventas[4][5])
{
	int masVentas = 0;
	std::string sucursal = "";
	for (int i = 0; i < 4; i++)
	{
		int venta = 0;
		for (int j = 0; j < 5; j++)
		{
			venta += ventas[i][j];
		}
		if (venta > masVentas)
		{
			masVentas = venta;
			sucursal = nombres[i];
		}
	}

	std::cout << "La sucursal con mayor cantidad de ventas fue '"
		<< sucursal << "' con un total de "
		<< masVentas << " articulos vendidos.\n";
}

void static Recaudos(std::string nombres[4], std::string productos[5], int precios[5], int ventas[4][5], bool esTotal)
{
	int recaudo = 0, masRecaudo = 0, recaudoSucursal = 0;
	for (int opcionSucursal = 0; opcionSucursal < 4; opcionSucursal++)
	{
		recaudo = RecaudacionPorSucursal(nombres, opcionSucursal, productos, precios, ventas);
		if (esTotal)
		{
			masRecaudo += recaudo;
		}
		else if (recaudo > masRecaudo)
		{
			masRecaudo = recaudo;
			recaudoSucursal = opcionSucursal;
		}
	}
	if (esTotal)
	{
		std::cout << "La empresa tuvo un recaudo total de: " << masRecaudo << std::endl;
	}
	else {
		std::cout << "La sucursal con mayor recaudo fue '" << nombres[recaudoSucursal] << "' y fue de " << masRecaudo << std::endl;
	}
}

// El administrador de la opcion seleccionada por el usuario
void static Enrutador(
	int opcion,
	std::string nombres[4],
	std::string productos[5],
	int precios[5],
	int stock[4][5],
	int ventas[4][5]
)
{
	switch (opcion)
	{
	case 1:
		std::cout << "Mostrando las ventas totales de cada sucursal" << std::endl;
		VentasStockTodasSucursales(nombres, productos, ventas);
		return;
	case 2:
		VentasStockPorSucursal(nombres, productos, ventas);
		return;
	case 3:
		VentasStockProductoEnSucursal(nombres, productos, ventas, true);
		return;
	case 4:
		std::cout << "Mostrando el stock en cada sucursal" << std::endl;
		VentasStockTodasSucursales(nombres, productos, stock);
		return;
	case 5:
		VentasStockPorSucursal(nombres, productos, stock);
		return;
	case 6:
		VentasStockProductoEnSucursal(nombres, productos, stock, false);
		return;
	case 7:
	{
		int opcionSucursal = 0, recaudo = 0;
		MenuSucursales(opcionSucursal, nombres);
		recaudo = RecaudacionPorSucursal(nombres, opcionSucursal, productos, precios, ventas);
		std::cout << "El recaudo hecho por la sucursal '"
			<< nombres[opcionSucursal]
			<< "' es de: "
				<< recaudo
				<< std::endl;
			return;
	}
	case 8:
		MasVentas(nombres, ventas);
		return;
	case 9:
		Recaudos(nombres, productos, precios, ventas, false);
		return;
	case 10:
		Recaudos(nombres, productos, precios, ventas, true);
		return;
	case 11:
		return;
	default:
		std::cout << "Valor no valido" << std::endl;
		return;
	}
}

// Funcion que despliega el menu de opciones
void static MenuOpciones(int& opcion, std::string nombres[4], std::string productos[5], int precios[5], int ventas[4][5], int stock[4][5])
{
	std::cout << "Ingrese la opcion que desea realizar:\n";
	std::cout << "1)\tMostrar cantidad de articulos vendidos de cada articulo por cada sucursal.\n";
	std::cout << "2)\tMostrar cantidad de articulos vendidos de cada articulo en la sucursal indicada.\n";
	std::cout << "3)\tMostrar cantidad de los articulos vendidos de un articulo dado de la sucursal indicada.\n";

	std::cout << "4)\tMostrar el stock disponible de todos los articulos en cada sucursal.\n";
	std::cout << "5)\tMostrar cantidad de stock disponible de cada articulo en la sucursal dada.\n";
	std::cout << "6)\tMostrar el stock disponible del articulo indicado en la sucursal dada.\n";

	std::cout << "7)\tMostrar la recaudacion total de cada sucursal.\n";
	std::cout << "8)\tMostrar la sucursal con mayor numero de ventas.\n";
	std::cout << "9)\tMostrar la sucursal de mayor recaudacion.\n";
	std::cout << "10)\tMostrar la recaudacion total de la empresa.\n";
	std::cout << "11)\t Salir.\n";
	std::cin >> opcion;

	Enrutador(opcion, nombres, productos, precios, stock, ventas);
}

// FunciC3n principal
int main()
{
	int opcion = 0;
	std::string nombres[4] = { "Maria", "Sofia", "Lalo", "Matilda" };
	std::string productos[5] = { "Camisa", "Gorro", "Saco", "Chaleco", "Chaqueta" };
	int precios[5] = { 7000, 10000, 15000, 20000, 25000 };
	int stock[4][5] = {
		{140, 200, 120, 40, 95},
		{50, 250, 101, 52, 17},
		{120, 90, 12, 28, 93},
		{70, 92, 12, 127, 55}
	};
	int ventas[4][5] = {
		{120, 100, 200, 42, 20},
		{50, 70, 12, 48, 20},
		{20, 17, 55, 25, 33},
		{70, 42, 32, 57, 45}
	};
	while (opcion != 11)
	{
		std::cout << "\n";
		system("pause");
		MenuOpciones(opcion, nombres, productos, precios, ventas, stock);
	}
	// MenuOpciones(opcion, nombres, productos, precios, ventas, stock);

	return 0;
}