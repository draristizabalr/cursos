#include<iostream>
#include<string.h>

using namespace std;

// Ingresar una frase y almacenarla en un arreglo de caracteres, luego mostrar el contenido por pantalla
// Representar un string como un arreglo de caracteres

int main()
{
  string palabras;
  cout<<"Ingrese palabra: \n";
  getline(cin, palabras);

  cout<<palabras;

  return 0;
}