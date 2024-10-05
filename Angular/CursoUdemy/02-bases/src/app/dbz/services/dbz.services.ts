import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { FinalCharacter, Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: FinalCharacter[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 14000
    },
  ];

  onNewCharacter(character: Character): void {
    const finalCharacter: FinalCharacter = {id: uuid(), ...character}
    this.characters.push(finalCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index,1)
  // }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }

  constructor() { }

}
