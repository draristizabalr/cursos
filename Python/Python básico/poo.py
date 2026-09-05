class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def greet(self):
    print(f'Hola, mi nombre es {self.name} y tengo {self.age}')

person1 = Person('David', 33)
person2 = Person('Carli', 29)

person1.greet()
person2.greet()

print('-' * 50)

class BankAcccount:
  def __init__(self, account_holder, balance):
    self.account_holder = account_holder
    self.balance = balance
    self.is_active = True

  def deposit(self, amount):
    if self.is_active:
      self.balance += amount
      print(f'Se ha depositado {amount}. Saldo actual {self.balance}')
    else:
      print('No se puede depositar. Cuenta inactiva')

  def withdraw(self, amount):
    if self.active:
      if amount <= self.balance:
        self.balance -= amount
        print(f'Se ha reitrado {amount}. Saldo actual {self.balance}')

  def deactivate_account(self):
    self.is_active = False
    print('La cuenta ha sido desactivada')

    
  def active_account(self):
    self.is_active = True
    print('La cuenta ha sido activada')


account1 = BankAcccount('Ana', 500)
account2 = BankAcccount('Luis', 1000)

# Llamada a los métodos
account1.deposit(200)
account2.deposit(100)
account1.deactivate_account()
account1.deposit(50)
account1.active_account()
account1.deposit(50)

