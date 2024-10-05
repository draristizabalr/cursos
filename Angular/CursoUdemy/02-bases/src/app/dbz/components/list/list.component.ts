import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FinalCharacter } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: FinalCharacter[] = []

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter (id: string): void {
    console.log('El indice es: ' + id)

    this.onDeleteId.emit(id)
  }
}
