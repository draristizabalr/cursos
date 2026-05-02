#include<iostream>
#include<string.h>
#include<locale>

using namespace std;

int main()
{
  setlocale(LC_ALL, "es_ES.UTF-8");
  
  char nombre[] = {"pEDrO"} ;
  strupr(nombre);
  cout<<nombre<<endl;
  strlwr(nombre);
  cout<<nombre<<endl;
  

  return 0;
}