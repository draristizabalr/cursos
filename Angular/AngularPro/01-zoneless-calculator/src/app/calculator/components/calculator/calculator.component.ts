import { Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})
export class CalculatorComponent {
  // Injects
  calculatorService = inject(CalculatorService);

  // Viewchildrens
  calculatorButtons = viewChildren(CalculatorButtonComponent);

  // Computed
  resultText = computed(() => this.calculatorService.resultText());
  subResultText = computed(() => this.calculatorService.subResultText());
  lastOperator = computed(() => this.calculatorService.lastOperator());


  handleClick(value: string) {
    this.calculatorService.constructNumber(value);
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    const { key } = event;

    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Delete: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '=',
      ',': '.'
    };

    const keyValue = keyEquivalents[key] ?? key;

    this.handleClick(keyValue);

    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(keyValue);
    })
  }
}
