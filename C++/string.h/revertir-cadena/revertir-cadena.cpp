#include<iostream>
#include<string.h>
#include<locale>

using namespace std;

int main()
{
  setlocale(LC_ALL, "es_ES.UTF-8");
  
  char a[] = "Semana";
  strrev(a);
  cout<<a<<endl;

  return 0;
}