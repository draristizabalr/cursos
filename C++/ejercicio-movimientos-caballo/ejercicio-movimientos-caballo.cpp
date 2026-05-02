#include <iostream>
#define max 5

const int movx[8] = { 1, 2, 2, 1, -1, -2, -2, -1 };
const int movy[8] = { -2, -1, 1, 2, 2, 1, -1, -2 };
int iteraciones = 0;

void CrearTablero(int mat[max][max])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            mat[i][j] = 0;
        }
    }

}

void Mostrar(int mat[max][max])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            std::cout << mat[i][j] << "\t";
        }
        std::cout << std::endl;
    }
    std::cout << std::endl;
}

int MovimientoInvalido(int mat[max][max])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (mat[i][j] == 0)
                return 0;
        }
    }

    return 1;
}

void Jugar(int mat[max][max], int numero, int x, int y)
{
    int nx = 0, ny = 0, opcion = 0, solucion = 0;
    iteraciones++;
    while (opcion < 8 && solucion == 0)
    {
        nx = movx[opcion] + x;
        ny = movy[opcion] + y;

        if ((mat[ny][nx] == 0) && ny >= 0 && ny < max && nx >= 0 && nx < max)
        {
            mat[ny][nx] = numero;
            if (numero != max * max)
                Jugar(mat, numero + 1, nx, ny);
            else
                solucion = 1;
        }
        opcion++;
    }
    if (MovimientoInvalido(mat) == 0)
        mat[y][x] = 0;
}

int main()
{
    int mat[max][max], columna, fila;

    std::cout << "Ingrese una fila:" << std::endl;
    std::cin >> fila;
    std::cout << "Ingrese una columna:" << std::endl;
    std::cin >> columna;
    std::cout << std::endl;

    CrearTablero(mat);
    mat[fila][columna] = 1;
    Jugar(mat, 2, columna, fila);
    Mostrar(mat);
    std::cout << std::endl << iteraciones << std::endl;
	if (MovimientoInvalido(mat) == 1)
		std::cout << "No hay solucion" << std::endl;
	else
		std::cout << "Hay solucion" << std::endl;


    return 0;
}