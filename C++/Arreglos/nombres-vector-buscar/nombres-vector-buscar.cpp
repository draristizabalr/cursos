#include <iostream>

using namespace std;

// Crear un arreglo de nombres, mostrar el arreglo con nombres
// Adicionalmente buscar un nombre en específico si lo está mostrarlo y si no, decir que no se encontró

void BuscarNombre(string nombre, string arr[])
{
  int count = arr->length();
  for (int i = 0; i < count; i++)
  {
    if (nombre == arr[i])
    {
      cout<<"El nombre se encuentra en la lista"<<endl;
      return;
    }
  }
  cout<<"El nombre no se encontró en la lista"<<endl;
}

int main()
{
  string arr[] = {"David", "Fernanda", "Noah", "Carmenza", "Alfonso"};
  string nombre;

  cout << "Introdusca el nombre que quiere buscar: " << endl;
  cin >> nombre;

  BuscarNombre(nombre, arr);

  return 0;
}