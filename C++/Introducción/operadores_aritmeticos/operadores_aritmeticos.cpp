#include<iostream>

using namespace std;

int main() {
  //+, -, *, /, %
  int a=12, b=5, suma=0, resta=0, mult=0, mod=0;
  float div=0;
  suma=a+b;
  resta=a-b;
  mult=a*b;
  div=a/(float)b;
  mod=a%b;
  cout<<"Los valores son: "<<a<<", "<<b<<endl;
  cout<<"El resultado de la suma es: "<<suma<<endl;
  cout<<"El resultado de la resta es: "<<resta<<endl;
  cout<<"El resultado de la multiplicacion es: "<<mult<<endl;
  cout<<"El resultado de la division es: "<<div<<endl;
  cout<<"El resultado de la modulo es: "<<mod<<endl;
  return 0;
}