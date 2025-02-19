#include<iostream>

using namespace std;

// Dado un número por consola, determinar si es un número par o impar

int main() 
{
  int num = 0;

  cout<<"Ingresar el número que se quiere evaluar: "<<endl;
  cin>>num;

  if (num % 2 == 0)
  {
    cout<<"El número "<<num<<" es par."<<endl;
    return 0;
  }
  
  cout<<"El número "<<num<<" es impar."<<endl;
  return 0;
}