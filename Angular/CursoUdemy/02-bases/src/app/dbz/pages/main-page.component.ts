import { Component } from '@angular/core';
import { Character, FinalCharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): FinalCharacter[] {
    return [...this.dbzService.characters]
  }

  deleteCharacterById(id: string):void {
    this.dbzService.deleteCharacterById( id )
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character)
  }
}
