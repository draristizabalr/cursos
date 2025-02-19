#include<iostream>

using namespace std;

// Dada 3 notas de un alumno calcular su promedio
// indicar si aprobó o reprobó y con que tipo de nota aprobó
// <40 "insuficiente" reprobado
// >40 pero <50 "suficiente" aprobado
// >50 pero <60 "bueno" aprobado
// >60 "excelente" aprobado

int main () {
  int nota = 0;

  cout<<"Ingrese nota del alumno: ";
  cin>>nota;

  if (nota < 40) {
    cout<<"Insuficiente"<<endl;
    cout<<"REPROBADO"<<endl;
    return 0;
  }

  if (nota >= 40 && nota < 50) {
    cout<<"Suficiente"<<endl;
    cout<<"APROBADO"<<endl;
    return 0;
  }

  if (nota >= 50 && nota < 60) {
    cout<<"Bueno"<<endl;
    cout<<"APROBADO"<<endl;
    return 0;
  }

  cout<<"Excelente"<<endl;
  cout<<"APROBADO"<<endl;
  
  return 0;
}