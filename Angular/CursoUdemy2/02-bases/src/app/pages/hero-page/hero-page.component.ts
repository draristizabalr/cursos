import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent { 
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription = computed(() => `${this.name()} - ${this.age()}`)

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  
  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
