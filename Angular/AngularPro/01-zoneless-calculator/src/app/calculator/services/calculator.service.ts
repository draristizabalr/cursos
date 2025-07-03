import { Injectable, signal } from '@angular/core';

export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const operators = ['+', '-', 'x', '÷'];
const specialOperators = ['C', '+/-', '.', 'Backspace', '=', '%'];

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  resultText = signal('0');
  subResultText = signal('0');
  lastOperator = signal('+');

  constructNumber(value: string): void {
    if (![...numbers, ...operators, ...specialOperators].includes(value)) {
      return;
    }

    if (
      this.resultText().length > 9 &&
      value !== 'C' &&
      value !== 'Backspace'
    ) {
      alert('Max length reached');
      return;
    }

    if (operators.includes(value)) {
      if (!this.lastOperator()) {
        this.lastOperator.set(value);
        this.subResultText.set(this.resultText());
        this.resultText.set('0');
        return;
      }
      this.calculateResult();
      this.lastOperator.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }

    switch (value) {
      case '=':
        // TODO
        this.calculateResult();
        return;

      case 'C':
        this.resultText.set('0');
        this.subResultText.set('0');
        this.lastOperator.set('+');
        return;

      case 'Backspace':
        this.resultText.update((text) => {
          if (text === '0') return '0';
          if (text.length === 1) return '0';
          return text.slice(0, -1);
        });
        return;
      case '%':
        this.resultText.update((text) => {
          if (text.includes('%')) {
            const percent = text.replace('%', '');
            return `${+percent / 100}`;
          }
          const number = +text;
          return `${number * 100}%`
        });
        return;

      // Validar el punto decimal
      case '.':
        if (this.resultText().includes('.')) return;

        this.resultText.update((text) => {
          if (text === '') return '0.';
          if (text === '0') return '0.';
          return text + '.';
        });
        return;

      case '0':
        this.resultText.update((text) => {
          if (text === '0') return text;
          if (text === '-0') return '0';
          return text + value;
        });
        return;

      case '+/-':
        this.resultText.update((text) => {
          if (text === '0') return text;
          if (text.includes('-')) return text.slice(1);
          return '-' + text;
        });
        return;
      default:
        this.resultText.update((text) => {
          if (text === '0') return value;
          return text + value;
        });
    }
  }

  calculateResult() {
    let number1, percentaje = false;
    if (this.subResultText().includes('%')){
      percentaje = true;
      number1 = this.subResultText().replace('%', '');
      number1 = +number1;
    } else {
      number1 = +this.subResultText();
    }

    this.resultText.update((number) => {
      let number2;
      if (number.includes('%')) {
        percentaje = true;
        number2 = number.replace('%', '');
        number2 = +number2;
      } else {
        if (percentaje){
          number2 = +number * 100;
        } else {
          number2 = +number;
        }
      }
      switch (this.lastOperator()) {
        case '+':
          return `${number1 + number2}`;
        case '-':
          return `${number1 - number2}`;
        case 'x':
          return `${number1 * number2}`;
        case '÷':
          return `${number1 / number2}`;
        default:
          return number;
      }
    });

    if (percentaje) this.resultText.update(text => text + '%');

    this.subResultText.set('0');
    this.lastOperator.set('');
  }
}
