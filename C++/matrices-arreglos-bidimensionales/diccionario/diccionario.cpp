#include <iostream>
#include <locale>
#include <string>

/*  Proyecto 1:
*   Crear un pequeño diccionario con las siguientes palabras y sus significados:
* 
*   Programación: Proceso de componer y organizar un conjunto de instrucciones para la creación de software
*   Algoritmo: Conjunto de pasos ordenados y finitos que se deben seguir para resolver un problema
*   Lenguaje de programación: lenguaje informático especialmente diseñado para describir el conjunto de acciones consecutivas o instrucciones que un equipo informático debe ejecutar.
*   Estructuras de control: conjunto de reglas que permiten contralar el flujo de ejecución del programa
*   Código: conjunto de instrucciones que un desarrollador ordena ejecutar a un computador 
* 
*   1) Mostrar todo el diccionario
*   2) Pedir una palabra y buscar si está en el diccionario, si lo está mostrar el significado
*   3) Mostrar todo el contenido en un afila dada
*   4) Añadir nuevas palabras con un significado desde consola
*/

int cantidadPalabras = 5, indice = 0;

void static ImprimirDiccionario(std::string diccionario[50][2])
{
    std::cout << "Diccionario completo" << std::endl << std::endl;
    while(indice < cantidadPalabras)
    {
        std::cout << "\t* " << diccionario[indice][0] << ": " << diccionario[indice][1] << std::endl;
        indice++;
    }
    indice = 0;
}

std::string static PasarAMinusculas(std::string palabra)
{
    for (int i = 0; i < palabra.length(); i++)
        palabra[i] = tolower(palabra[i]);

    return palabra;
}

bool static BuscarPalabra(std::string diccionario[50][2], std::string &palabra)
{
    std::cout << std::endl << "¿Qué palabra quieres buscar?" << std::endl;
    getline(std::cin, palabra);

    palabra = PasarAMinusculas(palabra);

    while (indice < cantidadPalabras)
    {
        std::string palabraDiccionario = PasarAMinusculas(diccionario[indice][0]);

        if (palabra.compare(palabraDiccionario) == 0)
        {
            std::cout << std::endl;
            std::cout << "El significado de '" << diccionario[indice][0] << "' es:\n" << diccionario[indice][1] << std::endl;
            indice = 0;
            return true;
        }
        indice++;
    }
    return false;
}

std::string static FormatoPalabraDiccionario(std::string palabra)
{
    palabra[0] = toupper(palabra[0]);
    for (int i = 1; i < palabra.length(); i++)
        palabra[i] = tolower(palabra[i]);

    return palabra;
}

void static AgregarNuevaPalabra(std::string diccionario[50][2], std::string palabra, std::string agregarSignificado)
{
    agregarSignificado = PasarAMinusculas(agregarSignificado);

    if (agregarSignificado == "si")
    {   
        diccionario[indice][0] = palabra;

        std::cout << "Escribe el significado de '" << palabra << "':" << std::endl;
        getline(std::cin, diccionario[indice][1]);

		cantidadPalabras++;
        indice = 0;
        ImprimirDiccionario(diccionario);
    }
}

int main()
{      
    setlocale(LC_ALL, "es_ES.UTF-8");
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    std::string diccionario[50][2] = {
        {"Programacion", "Proceso de componer y organizar un conjunto de instrucciones para la creación de software"},
        {"Algoritmo", "Conjunto de pasos ordenados y finitos que se deben seguir para resolver un problema"},
        {"Lenguaje de programacion", "lenguaje informático especialmente diseñado para describir el conjunto de acciones consecutivas o instrucciones que un equipo informático debe ejecutar."},
        {"Estructuras de control", "conjunto de reglas que permiten contralar el flujo de ejecución del programa"},
        {"Codigo", "conjunto de instrucciones que un desarrollador ordena ejecutar a un computador"}
    };
    std::string palabra = "", agregarSignificado = "";
    bool palabraEnDiccionario = false;
    
    ImprimirDiccionario(diccionario);

    palabraEnDiccionario = BuscarPalabra(diccionario, palabra);

    if (!palabraEnDiccionario)
    {
        palabra = FormatoPalabraDiccionario(palabra);
        std::cout << "Agregar la descripción de la palabra \"" << palabra << "\" (si/no): ";
        getline(std::cin, agregarSignificado);

        AgregarNuevaPalabra(diccionario, palabra, agregarSignificado);
    }
}
