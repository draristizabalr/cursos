import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/dragonball.interface';

function loadFromLocalStorage(): Character[] {

  const characters = localStorage.getItem('characters');
    

  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballSuperService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
    this.characters.update(current => [...current, character])
  }
}
