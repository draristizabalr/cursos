// compara-string.cpp : Este archivo contiene la función "main". La ejecución del programa comienza y termina ahí.
//

#include <iostream>
#include <locale>
#include <string>

using namespace std;

int main()
{
    setlocale(LC_ALL, "es_ES.UTF-8");
    string cadena1 = "", cadena2 = "";
    
    cout << "Introduzca el primer texto:"<<endl;
    getline(cin, cadena1);

    cout << "Introduzca el segundo texto:" << endl;
    getline(cin, cadena2);

    cout << endl;

    if (cadena1.compare(cadena2) == 0)
        cout << "Los textos son iguales\n";
    else
        cout << "Los textos son diferentes\n";

}
