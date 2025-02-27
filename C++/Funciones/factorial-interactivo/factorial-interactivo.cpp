#include<iostream>

using namespace std;

// Mediante una función obtener el factorial de un número dado por el usuario
// 5!-->5*4*3*2*1=120

int Factorial(int num) {

  if (num < 0){
    return 0;
  }
  
  if (num == 0 ) {
    return 1;
  }
  
  int result = 1, position = 1;
  
  for (position; position <= num; position++){
    result *= position;
  }
  
  return result;
}

int main() {
  
  int num=0, factorial=0;
  
  cout<<"Ingrese número"<<endl;
  cin>>num;
  
  factorial = Factorial(num);
  
  if (factorial == 0) {
    cout<<"El número debe ser un número natural"<<endl;
    return 0;
  }

  cout<<"El factorial de "<<num<<" es: "<<factorial<<endl;
  return 0;
}