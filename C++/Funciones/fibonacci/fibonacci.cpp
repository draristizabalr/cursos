#include<iostream>

using namespace std;

// Mostrar los primero n números de la secuencia fibonacci

void fibonacci(int num) {
  int position = 0, prev = 0, curr = 1, change = 0;
  string result = "";

  for (position; position < num; position++){
    if (position == 0) {
      cout<<prev<<", ";
    } else if (position == 1){
      cout<<curr<<", ";
    } else {
      if (position == num - 1){
        cout<<prev + curr;
      } else {
        cout<<prev + curr<<", ";
      }
      change = prev;
      prev = curr;
      curr += change;
    }
  }
    
}

int main() {

  int num = 0;

  cout<<"Ingresar la cantidad de números que se quieren ver: "<<endl;
  cin>>num;

  fibonacci(num);
}