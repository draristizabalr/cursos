#include <iostream>
#include <locale>
#include <string>
#include <cctype>

using namespace std;

int main()
{
    setlocale(LC_ALL, "es_ES.UTF-8");
    string texto = "";

    cout << "Escribe un texto o deja vacío:\n";
    getline(cin, texto);

    if (texto.empty() == 0)
        cout << "El texto no está vacío\n";
    else
        cout << "El texto está vacío\n";

    for (int i = 0; i < texto.length(); i++)
        texto[i] = toupper(texto[i]);

    cout << "El texto en mayúsculas es: " << texto << endl;

    for (int i = 0; i < texto.length(); i++)
        texto[i] = tolower(texto[i]);

	cout << "El texto en minúsculas es: " << texto << endl;
}

