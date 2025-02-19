#include<iostream>

using namespace std;

// Dado dos números ingresados por el usuario, obtener la sumatoria de todos los números entre ellos

int main() {
  int num1 = 0, num2 = 0, sum = 0, range = 0;

  cout<<"Ingrese el primer número: "<<endl;
  cin>>num1;

  cout<<"Ingrese el segundo número: "<<endl;
  cin>>num2;

  if (num1 > num2)
  {
    cout<<"El primer número es más grande que el segundo."<<endl;
    return 0;
  }

  range = num2 - num1;

  for (num1 = 0; num1 <= num2; num1++)
  {
    sum += num1;
  }
  
  cout<<"El valor de la sumatoria es "<<sum<<endl;
  

  return 0;
}