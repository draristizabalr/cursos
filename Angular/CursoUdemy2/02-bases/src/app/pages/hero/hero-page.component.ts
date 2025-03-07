import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  get heroDescription() {
    return `${this.name()} - ${this.age()}`
  }

  changeHero() {
    this.name.update(() =>'Spiderman');
    this.age.update(() => 22);
  }

  changeAge() {
    this.age.update(() => 60);
  }
  
  resetForm() {
    this.name.update(() =>'Ironman');
    this.age.update(() => 45);
  }
}
