#include<iostream>

using namespace std;

// Crear un login de usuario, pedir un nombre y una contraseña, volver a pedir contraseña
// una y otra vez hasta que la contraseña sea validada

int main() {

  string nombre = "Admin";
  int password = 0, confirm_password = 0;

  cout<<"Ingrese nombre de cuenta a crear"<<endl;
  cin>>nombre;

  cout<<"Ingrese clave: "<<endl;
  cin>>password;

  do
  {
    cout<<"Confirmar clave: "<<endl;
    cin>>confirm_password;
  } while (password != confirm_password);
  

  return 0;
}