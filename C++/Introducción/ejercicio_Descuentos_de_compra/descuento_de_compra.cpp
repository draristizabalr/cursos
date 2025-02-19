#include<iostream>

using namespace std;

// Un cliente compra tres productos con descuento, dado el precio y su descuento calcular el total a pagar

int main() {
  int valor1 = 0, descuento1 = 0, valor2 = 0, descuento2 = 0, valor3 = 0, descuento3 = 0, total_sin_descuento = 0;
  float total = 0;

  cout<<"Ingresar el valor del primer producto: "<<endl;
  cin>>valor1;

  cout<<"Ingresar el porcentaje de descuento del primer producto: "<<endl;
  cin>>descuento1;

  cout<<"Ingresar el valor del segundo producto: "<<endl;
  cin>>valor2;

  cout<<"Ingresar el porcentaje de descuento del segundo producto: "<<endl;
  cin>>descuento2;

  cout<<"Ingresar el valor del tercero producto: "<<endl;
  cin>>valor3;

  cout<<"Ingresar el porcentaje de descuento del tercero producto: "<<endl;
  cin>>descuento3;

  total += valor1 * (1 - ((float)descuento1 / 100));
  total += valor2 * (1 - ((float)descuento2 / 100));
  total += valor3 * (1 - ((float)descuento3 / 100));

  total_sin_descuento = valor1 + valor2 + valor3;

  cout<<"El valor total de la compra sin descuento es: $"<<total_sin_descuento<<endl;
  cout<<"El valor total de la compra con descuento es: $"<<total<<endl;

  return 0;
}