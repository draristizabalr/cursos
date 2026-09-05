class Person:
  def __init__(self, name: str, age: str):
    self.name = name
    self.age = age

  def greet(self):
    print('Hello! I am a person.')

class Student(Person):
  def __init__(self, name: str, age: str, student_id: str):
    super().__init__(name, age)
    self.student_id = student_id

  def greet(self):
    super().greet()
    print(f'Hello, my student ID is {self.student_id}')

student = Student('Carlos', 21, 'S54321')
student.greet()