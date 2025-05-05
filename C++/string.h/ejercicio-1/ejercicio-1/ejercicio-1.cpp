#include <iostream>
#include <string.h>
#include <locale>

using namespace std;

// Ordenar 3 nombres ingresados desde consola en orden alfabético
// Suponga que los 3 nombres son distintos

int main()
{
    setlocale(LC_ALL, "es_ES.UTF-8");

    char n1[20] = "", n2[20] = "", n3[20] = "";

    cout << "Escribir el primer nombre: " << endl;
    cin >> n1;
    cout << "Escribir el segundo nombre: " << endl;
    cin >> n2;
    cout << "Escribir el tercer nombre: " << endl;
    cin >> n3;

    if (strcmp(n1, n2) == 1 && strcmp(n2, n3) == 1)
        cout << "El orden de los nombres es: "<<n3<<", "<<n2<<", " <<n1<<endl;
    else if (strcmp(n1, n2) == -1 && strcmp(n2, n3) == -1)
		cout << "El orden de los nombres es: " << n1 << ", " << n2 << ", " << n3 << endl;
    else if (strcmp(n1, n2) == -1 && strcmp(n2, n3) == 1 && strcmp(n1, n3) == 1)
        cout << "El orden de los nombres es: " << n3 << ", " << n1 << ", " << n2 << endl;
    else if (strcmp(n1, n2) == -1 && strcmp(n2, n3) == 1 && strcmp(n1, n3) == -1)
        cout << "El orden de los nombres es: " << n1 << ", " << n3 << ", " << n2 << endl;
    else if (strcmp(n1, n2) == 1 && strcmp(n2, n3) == -1 && strcmp(n1, n3) == 1)
        cout << "El orden de los nombres es: " << n2 << ", " << n3 << ", " << n1 << endl;
    else if (strcmp(n1, n2) == 1 && strcmp(n2, n3) == -1 && strcmp(n1, n3) == -1)
        cout << "El orden de los nombres es: " << n2 << ", " << n1 << ", " << n3 << endl;

    return 0;
}

