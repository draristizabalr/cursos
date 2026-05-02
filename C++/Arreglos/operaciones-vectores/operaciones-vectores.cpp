#include <iostream>
#include <stdlib.h>
#include <time.h>

using namespace std;

// Sumar un vector A y un vector B y mostrar el resultado en un arreglo C

void IniciarVectores(int vector[10])
{
  int i = 0;
  while (i < 10)
  {
    vector[i] = rand() % 10;
    i++;
  }
}

void MostrarVector(int arr[10])
{
  int i = 0;
  for (i = 0; i < 10; i++)
  {
    cout << "arr[" << i << "] es:" << arr[i] << endl;
  }
  cout << endl;
}

void SumaVectores(int arr1[10], int arr2[10], int result[10])
{
  int i = 0;
  while (i < 10)
  {
    result[i] = arr1[i] + arr2[i];
    i++;
  }
}

int main()
{
  srand(time(NULL));
  int a[10], b[10], c[10];
  IniciarVectores(a);
  IniciarVectores(b);
  IniciarVectores(c);

  MostrarVector(a);
  MostrarVector(b);

  SumaVectores(a, b, c);

  MostrarVector(c);

  return 0;
}