#include<iostream>

using namespace std;

// Dado 7 estudiantes mostrar cuantos aprobaron, desaprobaron y rinden examen
// nota<30 DESAPROBADO
// nota>=30 y <40 EXAMEN
// nota>=40 APROBADO

int main() {
  int aprobaron = 0, desaprobaron = 0, examen = 0, lista = 1, nota = 0;

  for (lista; lista <= 7; lista++ ) {
    cout<<"Ingresar la nota del estudiante número "<<lista<<": "<<endl;
    cin>>nota;

    if (nota < 30) {
      desaprobaron++;
    } else if (nota >= 30 && nota < 40){
      examen++;
    } else {
      aprobaron++;
    }
  }

  cout<<"Estos son los resultados del curso: "<<endl;
  cout<<"Aprobaron: "<<aprobaron<<endl;
  cout<<"Desaprobaron: "<<desaprobaron<<endl;
  cout<<"Deben rendir examen: "<<examen<<endl;

  return 0;
}