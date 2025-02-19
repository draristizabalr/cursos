#include<iostream>

using namespace std;

// Crear una progresión aritmética sabiendo el número inicial, la diferencia y la cantidad de número a mostrar
// mostrar la secuencia de número obtenidos
// Ejemplo = 2,5,8,11,...
// Ejemplo2= 5,7,9,11,...
// Hallar el elemento en x posición dentro de la progresión

int main() {
  int inicio = 0, dif = 0, cantidad = 0, posición = 0;

  cout<<"Ingresar el número inicial: "<<endl;
  cin>>inicio;

  cout<<"Ingresar la diferencia que hay entre cada número: "<<endl;
  cin>>dif;

  cout<<"Ingresar la cantidad de números a mostrar: "<<endl;
  cin>>cantidad;

  for (posición; posición < cantidad; posición++) {
    cout<<inicio + (posición * dif)<<", ";
  }  
  cout<<"..."<<endl;
  
  cout<<"Ingrese la posición del número que quiere encontrar: "<<endl;
  cin>>posición;
  
  cout<<inicio + (posición * (dif - 1))<<endl;
  
  return 0;
}