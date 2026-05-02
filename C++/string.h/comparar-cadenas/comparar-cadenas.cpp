#include<iostream>
#include<string.h>
#include<locale>

using namespace std;

int main()
{
  setlocale(LC_ALL, "es_ES.UTF-8");
  char a[] = "Verano";
  char b[] = "Verano";

  if (strcmp(a, b) == 0)
  {
    cout<<"Estas cadenas son iguales\n";
  }
  else
  {
    cout<<"Estas cadenas son distintas\n";
  }

  return 0;
}