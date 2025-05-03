#include <iostream>
#include <time.h>
#include <stdlib.h>

using namespace std;

// Dado un arreglo de 100 elementos, hallar el mayor elemento y el menor elemento del mismo

void InicializarVector(int arr[100])
{
  int i = 0;

  while (i < 100)
  {
    arr[i] = rand() % 1000;
    i++;
  }
}

void MostrarVector(int arr[100])
{
  int i = 0;

  while (i < 100)
  {
    cout << "El valor de arr[" << i << "] es: " << arr[i] << endl;
    i++;
  }
  cout << endl;
}

void MayorMenorVector(int arr[100])
{
  int i = 0, max = arr[0], min = arr[0];

  while (i < 100)
  {
    if (arr[i] > max)
    {
      max = arr[i];
    }
    if (arr[i] < min)
    {
      min = arr[i];
    }
    i++;
  }

  cout<<"El valor máximo del vector es: "<<max<<endl;
  cout<<"El valor mínimo del vector es: "<<min<<endl;
}

int main()
{
  srand(time(NULL));
  int arr[100];

  InicializarVector(arr);
  MostrarVector(arr);

  MayorMenorVector(arr);

  return 0;
}