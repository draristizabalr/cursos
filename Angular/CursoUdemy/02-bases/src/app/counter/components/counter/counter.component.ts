import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="changeCounter(true)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="changeCounter(false)">-1</button>

  `
})

export class CounterComponent {
  public counter: number = 10;

  changeCounter(increment: boolean): void{
    if (increment) this.counter++
    else this.counter--
  }

  resetCounter(): void {
    this.counter = 10
  }

}
