from typing import List

# VEHICLES
class Vehicle:
  def __init__(self, brand: str, model: str, price: float):
    self.brand = brand
    self.model = model
    self.price = price
    self.is_available = True

  def sell(self):
    if self.is_available:
      self.is_available = False
      vehicle_printer(self, 'ha sido vendido')
    else:
      vehicle_printer(self, 'no está disponible')
  
  def return_vehicle(self):
    if self.is_available:
      vehicle_printer(self, 'está disponible')
    else:
      self.is_available = True
      vehicle_printer(self, 'se ha devuelto')
  
  def get_price(self):
    return self.price

  def check_available(self):
    return self.is_available
  
  def start_engine(self):
    raise NotImplementedError('Este método debe ser implementado por la subclase')

  def stop_engine(self):
    raise NotImplementedError('Este método debe ser implementado por la subclase')

class Car(Vehicle):
  def start_engine(self):
    if not self.is_available:
      return f'El motor del auto {self.brand} está en marcha'
    else:
      return f'El auto {self.brand} no está disponible'

  def stop_engine(self):
    if self.is_available:
      return f'El motor del auto {self.brand} se ha detenido'
    else:
      return f'El motor del auto {self.brand} no está disponible'

  def car_rented(self):
    self.is_available = False
    vehicle_printer(self, 'ha sido rentado')

class Truck(Vehicle):
  def start_engine(self):
    if not self.is_available:
      return f'El motor del camión {self.brand} está en marcha'
    else:
      return f'El camión {self.brand} no está disponible'

  def stop_engine(self):
    if self.is_available:
      return f'El motor del camión {self.brand} se ha detenido'
    else:
      return f'El motor del camión {self.brand} no está disponible'

  def car_rented(self):
    self.is_available = False
    vehicle_printer(self, 'ha sido rentado')

class Bike(Vehicle):
  def start_engine(self):
    if not self.is_available:
      return f'El motor de la bicicleta {self.brand} está en marcha'
    else:
      return f'La bicicleta {self.brand} no está disponible'

  def stop_engine(self):
    if self.is_available:
      return f'El motor de la bicicleta {self.brand} se ha detenido'
    else:
      return f'El motor de la bicicleta {self.brand} no está disponible'

  def car_rented(self):
    self.is_available = False
    vehicle_printer(self, 'ha sido rentado')

# CLIENT
class Client:
  def __init__(self, name: str, client_id: str):
    self.name = name
    self.client_id = client_id
    self.cars: List[Car] = []
  
  def rent_car(self, vehicle: Vehicle):
    if vehicle.is_available:
      self.cars.append(vehicle)
      vehicle.sell()
      vehicle_printer(vehicle, 'ha sido vendido')
    else:
      print(vehicle, 'no está disponible')

  def return_car(self, vehicle: Vehicle):
    if vehicle in self.cars:
      self.cars.remove(vehicle)
      vehicle.return_vehicle()
      vehicle_printer(vehicle, 'ha sido devuelto')
      
# CAR RENTAL
class Car_Rental:
  def __init__(self):
    self.cars: List[Car] = []
    self.clients: List[Client] = []

  def register_client(self, client: Client):
    if client in self.clients:
      client_printer(client, 'ya está registrado')
    else:
      self.clients.append(client)
      client_printer(client, 'se ha registrado')

  def add_vehicle(self, car: Car):
    if car in self.cars:
      vehicle_printer(car, 'ya está registrado')
    else:
      self.cars.append(car)
      vehicle_printer(car, 'se ha registrado')
  
  def show_available_vehicles(self):
    if len(self.cars) == 0:
      print('No hay carros disponibles')
    else:
      for vehicle in self.cars:
        print(f'{vehicle.brand} {vehicle.model}')
    print('-' * 50)

def vehicle_printer(vehicle: Vehicle, message: str):
  print(f'El vehiculo modelo {vehicle.brand} {vehicle.model} {message}\n', '-' * 50)
  
def client_printer(client: Client, message: str):
  print(f'El client {client.name} {message}\n', '-' * 50)

# Configuración de la tarea

# Creación de clientes
cliente1 = Client('David', '001')
cliente2 = Client('Carli', '002')

# Creación de autos
carro1 = Car('Ford', 'Mustang', '2000')
carro2 = Car('KIA', 'Picanto', '1500')

# Creación bicleta
bicicleta1 = Bike('Shimano', 'Pro', '800')

# Creación camión
camion1 = Truck('Volvo', 'FH16', '8000')

# Crear el consecionario
consecionario = Car_Rental()

# Agregar autos al consecionario
consecionario.add_vehicle(carro1)
consecionario.add_vehicle(carro2)
consecionario.add_vehicle(bicicleta1)
consecionario.add_vehicle(camion1)

# Registrar clientes al consecionario
consecionario.register_client(cliente1)
consecionario.register_client(cliente2)

# Mostrar autos disponibles
consecionario.show_available_vehicles()

# Rentar un auto
cliente1.rent_car(carro1)

# Mostrar autos disponibles
consecionario.show_available_vehicles()

# Devolver el auto
cliente1.return_car(carro1)

# Mostrar autos disponibles
consecionario.show_available_vehicles()
