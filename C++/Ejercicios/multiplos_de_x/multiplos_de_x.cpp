#include<iostream>

using namespace std;

// Dado un número a y un valor b, mostrar los múltiplos de "a" hasta multiplicarlos por "b"

int main() {
  int a = 0, b = 0, count = 1;

  cout<<"Ingresar el primer número: "<<endl;
  cin>>a;

  cout<<"Ingresar el segundo número: "<<endl;
  cin>>b;

  cout<<"------ RESULTADOS -------"<<endl;

  while (count <= b)
  {
    cout<<a * count<<endl;
    count++;
  }
  

  return 0;
}