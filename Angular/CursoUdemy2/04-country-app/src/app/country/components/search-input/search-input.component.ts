import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  placeholder = input<string>('Buscar');
  debounceTime = input<number>(500);
  initialValue = input<string>();

  inputValue = linkedSignal<string>(() =>this.initialValue() ?? '');

  searchValue = output<string>();

  debounceEffect = effect((onCleanUp) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.searchValue.emit(value);
    }, this.debounceTime());

    onCleanUp(() => {
      clearTimeout(timeout);
    })
  })
}
