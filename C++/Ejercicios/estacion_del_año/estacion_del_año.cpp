#include<iostream>

using namespace std;

// Dado un día de 1 a 30 y dado un string "enero", "febrero", ..., "diciembre"
// Determinar que estación del año representa en el hemisferio sur, sabiendo que:
// 21 de diciembre a 20 de marzo es VERANO
// 21 de marzo a 20 de junio es OTOÑO
// 21 de junio a 20 de septiembre es INVIERNO
// 21 de septiembre a 20 de diciembre es PRIMAVERA

int main() {
  int dia = 0;
  string mes = "";

  cout<<"Ingrese el día: "<<endl;
  cin>>dia;

  cout<<"Ingrese el mes: "<<endl;
  cin>>mes;

  if (
    (mes == "diciembre" && (dia > 20 && dia <=31)) ||
    (mes == "enero" && (dia >0 && dia <= 31)) ||
    (mes == "febrero" && (dia > 0 && dia <= 28)) ||
    (mes == "marzo" && (dia < 20 && dia <= 31))
  ) {
    cout<<"VERANO"<<endl;
    return 0;
  }

  if (
    (mes == "marzo" && (dia > 20 && dia <= 31)) ||
    (mes == "abril" && (dia > 0 && dia <= 30)) ||
    (mes == "mayo" && (dia > 0 && dia <=31)) ||
    (mes == "junio" && (dia < 20 && dia <=30))
  ) {
    cout<<"OTOÑO"<<endl;
    return 0;
  }

  if (
    (mes == "junio" && (dia > 20 && dia <=30)) ||
    (mes == "julio" && (dia > 0 && dia <= 31)) ||
    (mes == "agosto" && (dia > 0 && dia <= 31)) ||
    (mes == "septiembre" && (dia < 20 && dia <= 30))
  ) {
    cout<<"INVIERNO"<<endl;
    return 0;
  }

  if (
    (mes == "septiembre" && (dia > 20 && dia <= 30)) ||
    (mes == "octubre" && (dia > 0 && dia <= 31)) ||
    (mes == "noviembre" && (dia > 0 && dia <= 30)) ||
    (mes == "diciembre" && (dia < 20 && dia <= 31))
  ) {
    cout<<"PRIMAVERA"<<endl;
    return 0;
  }

  cout<<"Valores invalidos."<<endl;
  return 0;
}