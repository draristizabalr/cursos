import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'David';
  public gender: 'male' | 'female' | 'female' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    'no-binario': 'invitarle'
  }

  public changeClient(): void {
    this.name = 'Fernanda'
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'David',
    'Fernanda',
    'Melissa',
    'Natalia'
  ]

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',

  }

  public deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'David',
    age: 32,
    address: 'Manizales, Caldas'
  }

  // Async Pipe
  public myObservableTimer = interval(1000).pipe(
    tap( value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
      console.log('Tenemos data en la promesa.')
    }, 3500)
  })

}
