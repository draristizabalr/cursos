import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  gender: 'M' | 'F';
  wantNotifications: boolean;
}

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  private fb: FormBuilder = new FormBuilder()

  public myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ]
  })

  public person?: Person

  onSave(): void {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      alert('Debes aceptar los términos y condiciones')
      return
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value

    this.person = newPerson

    this.myForm.reset()
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }
}
