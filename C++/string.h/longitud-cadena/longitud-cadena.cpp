// longitud-cadena.cpp : Este archivo contiene la función "main". La ejecución del programa comienza y termina ahí.
//

#include <iostream>
#include <string.h>
#include <locale>

using namespace std;

int main()
{
    setlocale(LC_ALL, "es_ES.UTF-8");
    string cadena = "Hola mundo ¿Cómo estás?";
	char cadenaLista[30] = "Hola mundo ¿Cómo estás?";

    cout << "La cadena de caracteres es: " << cadena << endl;
    cout << endl;
    cout << "La cadena tiene " << cadena.size() << " caracteres\n";
    cout << "La cadena tiene " << cadena.length() << " caracteres\n";
    cout << "La cadena tiene " << strlen(cadenaLista) << " caracteres\n";
}
