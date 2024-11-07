import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: `
  .main {
    border: 1px dashed #666;
    border-radius: 2em;
    padding: 2em;
  }
  `
})
export class RegisterPageComponent {

  private fb: FormBuilder = new FormBuilder()

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required]],
    email: ['', [ Validators.required]],
    username: ['', [ Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required]]
  })

  onSave(): void {
    this.myForm.markAllAsTouched()
  }

  isValidField( field: string ) {
    // TODO: obtener desde un servicio
  }

}
