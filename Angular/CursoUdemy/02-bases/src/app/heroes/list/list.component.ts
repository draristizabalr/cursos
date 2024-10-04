import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public heroDeleted?: string = ''

  deleteLastHero(): void {
    this.heroDeleted = this.heroNames.pop()
  }

  resetListHero(): void {
    this.heroNames = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
    this.heroDeleted = ''
  }
}
