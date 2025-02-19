#include<iostream>

using namespace std;

int main() {
  int a = 0, b = 0, c = 0;
  float avg = 0;

  cout<<"Ingrese el primer número: "<<endl;
  cin>>a;
  
  cout<<"Ingrese el segundo número: "<<endl;
  cin>>b;

  cout<<"Ingrese el tercer número: "<<endl;
  cin>>c;

  avg = (a + b + c) / 3;

  cout<<"El promedio de los tres números es: "<<avg<<endl; 

  return 0;
}