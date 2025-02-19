#include<iostream>
#include<math.h>

using namespace std;

// Crear una progresión geométrica sabiendo el número inicial, la diferencia y la cantidad de elementos a mostrar
// mostrar la secuencia de números obtenidos
// Ejemplo: 3, 6, 12, 24, ...
// Ejemplo2: 5, 15, 45, 135, ...
// Hallar el elemento ubicado en X posición

int main() {
  int inicio = 0, dif = 0, cantidad = 0, posición = 0;

  cout<<"Ingresar el número inicial: "<<endl;
  cin>>inicio;

  cout<<"Ingresar la diferencia que hay entre cada número: "<<endl;
  cin>>dif;

  cout<<"Ingresar la cantidad de números a mostrar: "<<endl;
  cin>>cantidad;

  for (posición; posición < cantidad; posición++) {
    cout<<inicio * pow(dif, posición)<<", ";
  }  
  cout<<"..."<<endl;
  
  cout<<"Ingrese la posición del número que quiere encontrar: "<<endl;
  cin>>posición;
  
  cout<<inicio * pow(dif, (posición - 1))<<endl;
  
  return 0;
}