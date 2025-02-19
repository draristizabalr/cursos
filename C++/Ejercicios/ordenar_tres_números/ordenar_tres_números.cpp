#include<iostream>

using namespace std;

// Dado tres valores a, b y c, determinar que número es mayor a quien
// Todos los números deben ser diferentes
// 1,2,3
// 1,3,2
// 3,2,1
// 3,1,2
// 2,1,3
// 2,3,1

int main() {
  int primer = 0, segundo = 0, tercero = 0;

  cout<<"Ingresar el primer número: "<<endl;
  cin>>primer;

  cout<<"Ingresar el segundo número: "<<endl;
  cin>>segundo;

  cout<<"Ingresar el tercero número: "<<endl;
  cin>>tercero;

  if (primer == segundo || segundo == tercero || primer == tercero) {
    cout<<"Todos los números deben ser diferentes."<<endl;

    return 0;
  }

  if (primer < segundo && segundo < tercero) {
    cout<<"primer condicional"<<endl;
    cout<<"El orden de los números es: ";
    cout<<primer<<", ";
    cout<<segundo<<", ";
    cout<<tercero<<endl;
    return 0;
  }

  if (primer > segundo && segundo > tercero) {
    cout<<"segundo condicional"<<endl;
    cout<<"El orden de los números es: ";
    cout<<tercero<<", ";
    cout<<segundo<<", ";
    cout<<primer<<endl;
    
    return 0;
  }
  
  if (primer < segundo && segundo > tercero && primer < tercero) {
    cout<<"tercer condicional"<<endl;
    cout<<"El orden de los números es: ";
    cout<<primer<<", ";
    cout<<tercero<<", ";
    cout<<segundo<<endl;
    
    return 0;
  }
  
  if (primer > segundo && segundo < tercero && primer < tercero) {
    cout<<"cuarto condicional"<<endl;
    cout<<"El orden de los números es: ";
    cout<<segundo<<", ";
    cout<<primer<<", ";
    cout<<tercero<<endl;
    
    return 0;
  }

  if (primer > segundo && segundo < tercero && primer > tercero) {
    cout<<"quinto condicional"<<endl;
    cout<<"El orden de los números es: ";
    cout<<segundo<<", ";
    cout<<tercero<<", ";
    cout<<primer<<endl;
    
    return 0;
  }

  if (primer < segundo && segundo > tercero && primer > tercero) {
    cout<<"sexto condicional"<<endl;
    cout<<"El orden de los números es: ";
    cout<<tercero<<", ";
    cout<<primer<<", ";
    cout<<segundo<<endl;
    
    return 0;
  }

  return 0;
}