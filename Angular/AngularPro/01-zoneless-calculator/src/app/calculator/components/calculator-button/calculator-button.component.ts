import { Component, ElementRef, input, output, signal, viewChild} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-1/4]': '!isDoubleSize()',
    '[class.w-1/2]': 'isDoubleSize()',
    // attribute: 'hola',
    // 'data-size': 'XL',
  },
})
export class CalculatorButtonComponent {
  // Inputs
  isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });
  isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // Outputs
  onClick = output<string>();

  // ViewChilds
  contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  // Signals
  isPressed = signal<boolean>(false);

  handleClick() {
    if (!this.contentValue()?.nativeElement) return;

    const value = this.contentValue()!.nativeElement.innerText;
    this.onClick.emit(value.trim());
  }

  keyboardPressedStyle(key: string) {
    if (!this.contentValue()) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if (value !== key) return;

    this.isPressed.update((current) => !current);

    setTimeout(() => {
      this.isPressed.update((current) => !current);
    }, 100);
  }
}
