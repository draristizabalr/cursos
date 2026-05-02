while True:
  while True:
    player_1 = input('Jugador número 1. Escoge una opción ("Piedra", "Papel" o "Tijeras")\n').lower()
    if player_1 == 'piedra' or player_1 == 'papel' or player_1 == 'tijeras':
      break
    else:
      print('Su elección no es valida')

  while True:
    player_2 = input('Jugador número 1. Escoge una opción ("Piedra", "Papel" o "Tijeras")\n').lower()
    if player_2 == 'piedra' or player_2 == 'papel' or player_2 == 'tijeras':
      break
    else:
      print('Su elección no es valida')

  if player_1 == 'papel' and player_2 == 'piedra':
    print('Jugador 1 gana')
  elif player_1 == 'tijeras' and player_2 == 'papel':
    print('Jugador 1 gana')
  elif player_1 == 'piedra' and player_2 == 'tijeras':
    print('Jugador 1 gana')
  elif player_1 == player_2:
    print('Es un empate. Ambos jugadores eligieron la misma opción')
  else:
    print('Jugador 2 gana')

