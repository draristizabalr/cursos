import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styles: `
  strong {
    font-size: 1.5em;
    font-weight: bold;
  }

  .button-section {
    margin-top: 1em;
    display: flex;
    gap: 1em;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent { 
  counter = 10;
  counterSignal = signal(10);

  increment(value: number):void {
    this.counter += value;
    this.counterSignal.update(current => current + value)
  }
  
  resetCounter(): void {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
