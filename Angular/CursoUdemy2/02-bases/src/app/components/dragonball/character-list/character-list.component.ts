import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/dragonball.interface';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styles: ``,
})
export class CharacterListComponent { 
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
