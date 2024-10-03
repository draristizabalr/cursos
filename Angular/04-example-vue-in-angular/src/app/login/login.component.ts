import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = ''
  password = ''

  clickButton(event: Event) {
    event.preventDefault()
    alert(`username: ${this.username}\npassword: ${this.password}`)
  }
}
