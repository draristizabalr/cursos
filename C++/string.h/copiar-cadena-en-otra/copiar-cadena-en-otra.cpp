#include<iostream>
#include<string.h>
#include<locale>

using namespace std;

int main()
{
  setlocale(LC_ALL, "es_ES.UTF-8");
  
  char a[] = "Maria";
  char b[] = "Estefanía";

  strcpy(a, b);
  cout<<a<<endl;

  return 0;
}