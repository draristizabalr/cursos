#include<iostream>

using namespace std;

// Calcular factorial de forma recursiva

int Factorial(int num) {
  if (num < 0){
    return 0;
  }

  if (num == 0) {
    return 1;
  }

  return num * Factorial(num - 1);
}

int main() {
  int num = 0, result = 0;

  cout<<"Ingresar número: "<<endl;
  cin>>num;

  result = Factorial(num);

  if (result == 0) {
    cout<<"El número ingresado debe ser natural."<<endl;
    return 0;
  }

  cout<<"El factorial de "<<num<<" es: "<<result<<endl;
  return 0;
}