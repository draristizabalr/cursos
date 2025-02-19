#include<iostream>

using namespace std;

// Dado un valor ingresado desde consola mostrar el día de la semana que representa
// 1) Lunes
// 2) Martes
// 3) Miércoles
// 4) Jueves
// 5) Viernes
// 6) Sábado
// 7) Domingo


int main() {
  int dia = 0;

  cout<<"Ingrese el número del día de la semana: "<<endl;
  cin>>dia;

  switch (dia)
  {
  case 1:
    cout<<"Lunes"<<endl;
    break;
  case 2:
    cout<<"Martes"<<endl;
    break;
  case 3:
    cout<<"Miércoles"<<endl;
    break;
  case 4:
    cout<<"Jueves"<<endl;
    break;
  case 5:
    cout<<"Viernes"<<endl;
    break;
  case 6:
    cout<<"Sábado"<<endl;
    break;
  case 7:
    cout<<"Domingo"<<endl;
    break;
  
  default:
    cout<<"Valor invalido"<<endl;
    break;
  }

  return 0;
}