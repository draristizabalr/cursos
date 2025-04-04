#include<iostream>
using namespace std;

void Suma(int &a, int &b)
{
  a=25;
  b=150;
  cout<<a+b<<endl;
}

int main()
{
  int a=12, b=5;
  Suma(a,b);
  cout<<a<<endl;
  cout<<b<<endl;
  return 0;
}