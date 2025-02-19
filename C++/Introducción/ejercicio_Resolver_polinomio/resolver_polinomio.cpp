#include<iostream>
#include<math.h>

using namespace std;

// Debe crear un programa que resuelva el polinomio 5x3 + 7x2 + 3x + 9

int main() {
  int x = 0, resultado = 0;

  cout<<"Ingrese el valor de x: "<<endl;
  cin>>x;

  resultado += 5 * pow(x, 3);
  resultado += 7 * pow(x, 2);
  resultado += 3 * x;
  resultado += 9;

  cout<<"El resultado del polinomio con el valor de x="<<x<<" es: "<<resultado<<endl;

  return 0;
}