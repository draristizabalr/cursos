#include<iostream>

using namespace std;

// Hacer un conversor de dinero de dolar-euro, euro-dolar, dolar-clp, clp-dolar, clp-euro, euro-clp´
// sabiendo que
// 1 dolar = 807 clp
// 1 dolar = 0.91euros
// 1 euro = 1.1dolar
// 1 euro = 862 clp
// 1 clp = 0.0013 dolares
// 1 clp = 0.0012 euros

int main() {
  int clp = 0, resp = 0, cantidad = 0;
  float dolar = 0, euro = 0;

  cout<<"Ingrese una opción:"<<endl;
  cout<<"1)Dolar-Euro"<<endl;
  cout<<"2)Euro-Dolar"<<endl;
  cout<<"3)Dolar-Clp"<<endl;
  cout<<"4)Clp-Dolar"<<endl;
  cout<<"5)Euro-Clp"<<endl;
  cout<<"6)Clp-Euro"<<endl;
  cin>>resp;

  cout<<"Ingrese cantidad: "<<endl;
  cin>>cantidad;

  switch (resp)
  {
  case 1:
    euro = cantidad * 0.91;
    cout<<"El valor en euros es: "<<euro<<endl;
    break;
  case 2:
    dolar = cantidad * 1.1;
    cout<<"El valor en dolares es: "<<dolar<<endl;
    break;
  case 3:
    clp = cantidad * 807;
    cout<<"El valor en clp es: "<<clp<<endl;
    break;
  case 4:
    dolar = cantidad * 0.0013;
    cout<<"El valor en dolares es: "<<dolar<<endl;
    break;
  case 5:
    clp = cantidad * 862;
    cout<<"El valor en clp es: "<<clp<<endl;
    break;
  case 6:
    euro = cantidad * 0.0012;
    cout<<"El valor en euros es: "<<euro<<endl;
    break;
  default:
    cout<<"Opción invalida"<<endl;
    break;
  }

  return 0;
}