#include<iostream>

using namespace std;

int main() {
  int num = 0;
  cout<<"Ingrese un numero: ";
  cin>>num;
  num++;
  cout<<"Numero incrementado: "<<num<<endl;
  ++num;
  cout<<"Numero incrementado: "<<num<<endl;
  num--;
  cout<<"Numero decrementado: "<<num<<endl;
  --num;
  cout<<"Numero decrementado: "<<num<<endl;
  return 0;
}