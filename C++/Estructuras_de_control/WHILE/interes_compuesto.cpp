#include<iostream>

using namespace std;

// Un usuario decide dejar sus ahorros en un fondo de inversión que le ofrece una rentabilidad del 9% anual
// ¿Cuanto dinero tendía este usuario al cabo de 5 años sin retirar dinero?

int main() {
  int count = 0;
  float ahorros = 0;

  cout<<"¿Cual es la cantidad del ahorro que se va ingresar?"<<endl;
  cin>>ahorros;

  while (count < 5)
  {
    count++;
    ahorros += ahorros * 0.09;
  };

  cout<<"El valor a reclamar después de 5 años es de $"<<ahorros<<endl;
  return 0;
}