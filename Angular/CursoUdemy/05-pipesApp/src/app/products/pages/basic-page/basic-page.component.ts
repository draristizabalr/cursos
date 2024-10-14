import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {
  public nameLower: string = 'fernando'
  public nameUpper: string = 'FERNANDO'
  public fullName: string = 'fErNAnDo HeRrERa'

  public customDate: Date = new Date();
}
