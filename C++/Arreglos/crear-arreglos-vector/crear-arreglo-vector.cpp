#include<iostream>
using namespace std;

int main()
{
  int vector[10] = {5,7,11,15,17,9,1,2,8,9};
  int vector2[] = {5,7,11,15,17,4,9,1,2,8,9};
  int posicion=0;
  int buscar=0;
  int i=0;

  cout<<"Ingrese la posicion que desea buscar: ";
  cin>>posicion;
  cout<<"Lo que hay en la posición "<<posicion<<" es: "<<vector[posicion-1]<<endl;

  cout<<"Ingrese le número que desea buscar: ";
  cin>>buscar;

  while(i<10)
  {
    if(vector[i]==buscar)
    {
      cout<<"El elemento fue encontrado en  la posición: "<<i+1<<" y es: "<<vector[i]<<endl;
      return 0;
    }
    i++;
  }
  cout<<"El número no fue encontrado.";

  return 0;
}