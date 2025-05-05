#include <iostream>
#include <locale>
#include <string>
#include <windows.h>

using namespace std;

// Dado un nombre y apellido se nos pide transformar sus iniciales a mayúsculas y todo lo demás a minúsuculas.
// Ejemplo1: [abril guerrero] --> [Abril Guerrero]
// Ejemplo2: [ claudio gonzalez ] --> [Claudio Gonzalez]

string formatText(string texto)
{
    for (int i = 0; i < texto.length(); i++)
    {
        if (i == 0)
            texto[i] = toupper(texto[i]);
        else
            texto[i] = tolower(texto[i]);
    }

    return texto;
}

int main()
{   
    setlocale(LC_ALL, "es_ES.UTF-8");

    string nombre = "", apellido = "";
    cout << "Ingrese su nombre: ";
    getline(cin, nombre);
    cout << "Ingrese su apellido: ";
    getline(cin, apellido);

    cout << "El nombre está escrito originalmente como: " << nombre << " " << apellido << endl;

    
    nombre = formatText(nombre);
	apellido = formatText(apellido);

    cout << "El nombre con formato es: " << nombre << " " << apellido << endl;

    /*string signos[4] = { "-", "/", "|", "\\" }, barra = "----------------------------------------------------------------------------------------------------", carga = "";

    for (int i = 0; i < 100; i++)
    {
        cout << signos[i % 4] << carga << barra << i << "%\r";
        carga += "#";
		barra.resize(barra.length() - 1);
        Sleep(25);
        system("cls");
    }*/
}
