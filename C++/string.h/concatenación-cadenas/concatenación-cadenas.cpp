#include<iostream>
#include<string.h>
#include<locale>

using namespace std;

int main()
{
  setlocale(LC_ALL, "es_ES.UTF-8");
  // string saludo = "Hola mundo";
  char a[100] = "hola mundo ";
  char b[] = "¿Qué tal va el día?\n";
  strcat(a, b);
  cout<<a<<endl;

  return 0;
}