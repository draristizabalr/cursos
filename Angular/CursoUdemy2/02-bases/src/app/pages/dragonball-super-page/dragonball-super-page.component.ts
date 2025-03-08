import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { AddCharacterComponent } from '../../components/dragonball/add-character/add-character.component';
import { DragonballSuperService } from 'src/app/services/dragonball-super.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    AddCharacterComponent
  ],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperPageComponent { 
  public dragonballService = inject(DragonballSuperService);
}
