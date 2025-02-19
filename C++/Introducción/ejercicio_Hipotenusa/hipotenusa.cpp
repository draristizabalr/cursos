#include<iostream>
#include<math.h>

using namespace std;

int main(){
  int cateto1, cateto2;
  float hipotenusa;

  cout<<"Ingresar el valor del primer cateto: "<<endl;
  cin>>cateto1;

  cout<<"Ingresar el valor del segundo cateto: "<<endl;
  cin>>cateto2;

  hipotenusa = sqrt((pow(cateto1, 2) + pow(cateto2, 2)));

  cout<<"La hipotenusa del triangulo es: "<<hipotenusa<<endl;

  return 0;
}