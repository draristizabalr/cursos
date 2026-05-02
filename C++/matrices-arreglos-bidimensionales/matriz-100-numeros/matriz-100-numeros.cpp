#include <iostream>

// Crar una matriz o arreglo bidimensional de los 100 primeros números naturales

int main()
{
    int matriz[10][10];
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < 10; j++)
        {
            matriz[i][j] = i * 10 + j + 1;
        }
    }
    std::cout << "La matriz es:" << std::endl;
    for (int i = 0; i < 10; i++)
    {   
        std::cout << "\t|\t";
        for (int j = 0; j < 10; j++)
        {
			if (j != 9)
                std::cout << matriz[i][j] << ",\t";
			else
				std::cout << matriz[i][j] << "\t|";
        }
        std::cout << std::endl;
    }
}
