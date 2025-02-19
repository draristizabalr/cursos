#include<iostream>

using namespace std;

int main() {
  int num = 0, divisor = 2;
  bool esPrimo = true;

  cout<<"Ingrese el número a evaluar: ";
  cin>>num;

  do
  {
    if (num % divisor == 0){
      cout<<"El número "<<num<<" no es un número primo."<<endl;
      cout<<"Al menos es divisible entre: "<<divisor<<endl;
      esPrimo = false;
      break;
    }
    divisor++;
  } while (num != divisor);
  
  if (esPrimo)
  {
    cout<<"El número "<<num<<" es primo"<<endl;
    return 0;
  }

  return 0;
}