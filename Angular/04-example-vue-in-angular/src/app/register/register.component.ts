import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
username = ''
password = ''
name = ''
email = ''

async clickButton(event: Event) {
  event.preventDefault()
  alert(`name: ${this.name}\nusername: ${this.username}\nemail: ${this.email}\npassword: ${this.password}`)
  this.username = ''
  this.password = ''
  this.name = ''
  this.email = ''
}
}
