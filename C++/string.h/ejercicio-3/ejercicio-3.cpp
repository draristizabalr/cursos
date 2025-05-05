#include <iostream>
#include <locale>
#include <windows.h>

// Crear un cronómetro que finalice tras el tiempo dado

static void Cronometro( int segundos, int minutos, int horas, int respuesta)
{
	std::cout << "Ingrese tiempo en segundos que desea mantener activo el cronómetro:\n ";
    std::cin >> respuesta;
    while (horas < 24)
    {
        while (minutos < 60)
        {
            while (segundos < 60)
            {
                if (segundos == respuesta)
                {
                    return;
                }
                Sleep(1000);
                segundos++;
                std::cout << horas << ":" << minutos << ":" << segundos << std::endl;
            }
            minutos++;
            segundos = 0;
        }
		horas++;
        minutos = 0;
        segundos = 0;
    }
}

int main()
{
    setlocale(LC_ALL, "es_ES.UTF-8");
	int segundos = 0, minutos = 0, horas = 0, respuesta = 0;
    Cronometro(segundos, minutos, horas, respuesta);

}
