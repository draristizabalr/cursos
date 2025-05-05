#include <iostream>
#include <string>
#include <locale>

using namespace std;

int main()
{
    setlocale(LC_ALL, "es_ES.UTF-8");

    string nombre = "", apellido = "", nombreCompleto = "";

    cout << "Ingrese el nombre:\n";
    getline(cin, nombre);

    cout << "Ingrese el apellido:\n";
    getline(cin, apellido);

    nombreCompleto = nombre.append(" ").append(apellido);

    cout << "El nombre completo es: " << nombreCompleto << endl;
}

