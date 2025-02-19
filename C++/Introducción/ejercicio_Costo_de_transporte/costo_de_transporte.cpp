#include<iostream>

using namespace std;

int main() {
  int recorrido, combustible, costo;
  float autonomía;

  cout<<"¿Cuantos kilómetros ha recorrido el auto?"<<endl;
  cin>>recorrido;

  cout<<"¿Cuantos galones de combustible se ha consumido el auto en el recorrido?"<<endl;
  cin>>combustible;

  autonomía = combustible / recorrido;

  costo = combustible * 880;

  cout<<"El auto tiene una autonomía promedio de: "<<autonomía<<" por kilómetro por galón."<<endl;
  cout<<"Has gastado "<<costo<<" CLP en el camino."<<endl;
  return 0;
}