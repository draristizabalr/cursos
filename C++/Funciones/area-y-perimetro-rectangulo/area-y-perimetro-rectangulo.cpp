#include<iostream>
#include<string.h>
using namespace std;

// Calcular el area y perímetro de un rectangulo usando funciones
void Area(int base, int altura)
{
  int area = base * altura;
  cout<<"El area del rectangulo es: "<<area<<endl;
}

void Perimetro(int base, int altura)
{
  int perimetro = (base + altura) * 2;
  cout<<"El perímetro del rectangulo es: "<<perimetro<<endl;
}


int main()
{
  int base=0, altura=0;
  cout<<"Indique la medida de la base: "<<endl;
  cin>>base;

  cout<<"Ahora, indique el valor de la altura: "<<endl;
  cin>>altura;

  Area(base, altura);
  Perimetro(base, altura);

  return 0;
}