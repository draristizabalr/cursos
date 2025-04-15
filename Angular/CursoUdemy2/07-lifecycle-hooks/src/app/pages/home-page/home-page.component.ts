import { Component, effect, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

function log(...messages: string[]) {
  console.log(`${messages[0]} %c${messages.slice(1).join()}`, 'color: #bada55');
}

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
  styles: `
    button {
      padding: 0.5em 1em;
      border: none;
      border-radius: 0.5em;
      background-color: #66f;
      color: white;
      cursor: pointer;
    }

    button:active{
      background-color: #33f;
    }

    section {
      display: flex;
      gap: 0.5em;
    }
  `
})
export class HomePageComponent {
  traditionalProperty = 'David';
  signalProperty = signal('David');

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios.')

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando e ejecto se va a destruir')
    })
  })

  constructor() {
    log('Constructor llamado');
  }

  changeTraditional() {
    this.traditionalProperty = 'David Aristizabal';
  }

  changeSignal() {
    this.signalProperty.set('David Aristizabal');
  }


  ngOnInit() {
    log(
      'ngOnInit',
      "Runs every time the component's inputs have changed."
    );
  }

  ngOnChanges() {
    log(
      'ngOnChanges',
      "Runs every time the component's inputs have changed."
    );
  }

  ngOnDestroy() {
    log(
      'ngOnDestroy',
      'runs once just before a component is destroyed.'
    );
  }

  ngDoCheck() {
    log(
      'ngDoCheck',
      'Runs every time this component is checked for changes.'
    );
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time the children nested inside the component (its content) have been checked for changes.'
    );
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs every time the children in the component's template (its view) have been checked for changes."
    );
  }


}
