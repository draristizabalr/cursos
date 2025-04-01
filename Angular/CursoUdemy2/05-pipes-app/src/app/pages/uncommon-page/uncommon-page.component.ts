import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canadá',
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canadá',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    AsyncPipe,
    CardComponent,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //i18n select
  client = signal(client1);
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n plural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal<string[]>([
    'Fernando',
    'Melissa',
    'Juan',
    'Maria',
    'Pedro',
    'Juanita',
    'Juanito',
    'David',
    'Fernanda',
    'Javier',
    'Joaquin',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canadá',
  };

  // Async Pipe
  promeseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });

  myObservableTimer = interval(1000).pipe(
    map((value) =>  value + 1),
    tap((value) => console.log('tap:', value)),
  );
}
