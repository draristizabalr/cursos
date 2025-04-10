#include<iostream>
#include<time.h>
using namespace std;

int main()
{
  int vector[100], i=0;
  srand(time(NULL));
  for ( i = 0; i < 100; i++)
  {
    vector[i] = rand()%100;
  }
  i=0;
  while(i<100)
  {
    cout<<"vector["<<i<<"]="<<vector[i]<<endl;
    i++;
  }  

  return 0;
}