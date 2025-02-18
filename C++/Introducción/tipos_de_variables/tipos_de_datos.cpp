#include<iostream>
#include<iomanip>

using namespace std;

int main() {
  short num=33000; //-32767, 32768
  int num2=400000000; //-2147483648, 2147483647
  long long num3=10000000000000000LL; //-9223372036854775808, 9223372036854775807
  float num4=3.14159265358979323846; //3.14159265358979323846
  double num5=2.12345678901234567890; //2.12345678901234567890
  bool bandera=true;
  char letra='ahor';

  cout<<setprecision(20);
  cout<<"El valor de num es: "<<num<<endl;
  cout<<"El valor de num2 es: "<<num2<<endl;
  cout<<"El valor de num3 es: "<<num3<<endl;
  cout<<"El valor de num4 es: "<<num4<<endl;
  cout<<"El valor de num5 es: "<<num5<<endl;
  cout<<"El valor de bandera es: "<<bandera<<endl;
  cout<<"El valor de letra es: "<<letra<<endl;
  cout<<"El tamano de num es: "<<sizeof(num)<<" bits"<<endl;
  cout<<"El tamano de num2 es: "<<sizeof(num2)<<" bits"<<endl;
  cout<<"El tamano de num3 es: "<<sizeof(num3)<<" bits"<<endl;
  cout<<"El tamano de num4 es: "<<sizeof(num4)<<" bits"<<endl;
  cout<<"El tamano de num5 es: "<<sizeof(num5)<<" bits"<<endl;
  cout<<"El tamano de bandera es: "<<sizeof(bandera)<<" bits"<<endl;
  cout<<"El tamano de letra es: "<<sizeof(letra)<<" bits"<<endl;
  return 0;
}