#include<iostream>

using namespace std;

// Dado un valor determinar si un usuario es mayor de edad o no
// Si lo es mostrar el mensaje acceso exitoso sino mostrar acceso denegado

int main() {
  int edad = 0;

  cout<<"Ingresar edad del usuario: "<<endl;
  cin>>edad;

  if (edad >= 18) {
    cout<<"Acceso exitoso!"<<endl;
    return 0;
  }

  cout<<"Acceso denegado"<<endl;

  return 0;
}