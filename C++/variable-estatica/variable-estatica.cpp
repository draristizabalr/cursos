#include <iostream>
using namespace std;

// Realizar un programa que de la sumatoria de 1 hasta N
int inputUser()
{
  int N = 0;
  while (N <= 0)
  {
    cout << "Indique hasta que número quiere realizar la sumatoria: ";
    cin >> N;
    if (N < 0)
    {
      cout << "El número final debe ser mayor que 0" << endl
           << endl;
    }
  }

  return N;
}

void sumatoria(int N, bool isLast)
{
  static int sumatoria = 0;
  sumatoria = sumatoria + N;

  if (isLast)
  {
    cout << sumatoria << "]";
  }
  else
  {
    cout << sumatoria << ", ";
  }
}

int main()
{
  int N = 0;
  N = inputUser();
  cout << "[";

  for (int i = 1; i <= N; i++)
  {
    sumatoria(i, i == N);
  }
}