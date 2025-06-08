#include<iostream>
#define N 8

using namespace std;

static void MostrarSolucion(int tablero[N][N])
{
	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			cout << (tablero[i][j] ? "X\t" : ".\t");
		}
		cout << endl;
	}
}

static bool Validar(int tablero[N][N], int fila, int columna)
{
	for (int i = 0; i <= fila; i++)
	{
		if (tablero[i][columna] == 1)
		{
			return false;
		}
	}

	// Validar diagonal
	for (int i = fila; i >= 0; i--)
	{
		if (tablero[i][i] == 1)
			return false;
	}

	int j = columna;
	for (int i = fila; i >= 0; i--)
	{
		if (tablero[i][j] == 1)
			return false;
		j++;
	}

	return true;
}

static bool ResolverProblema(int tablero[N][N], int fila)
{
	if (fila >= N)	
		return true;

	for (int columna = 0; columna <= N; columna++)
	{
		if (Validar(tablero, fila, columna))
		{
			tablero[fila][columna] = 1;
			if (ResolverProblema(tablero, fila + 1))
				return true;

			tablero[fila][columna] = 0;
		}
	}
	return false;
}

static bool ResolverReinas()
{
	int tablero[N][N] = { 0 };
	if (!ResolverProblema(tablero, 0))
	{
		cout << "No se encontró una solución valida" << endl;
		MostrarSolucion(tablero);
		return false;
	}
	MostrarSolucion(tablero);
	return true;
}

int main()
{
	ResolverReinas();

	return 0;
}