import { Injectable } from '@angular/core'
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase()

    if (value === 'strider') {
      return {
        noStrider: true,
      }
    }

    return null
  }

  public isValidField( form: FormGroup,field: string ) {
    return form.controls[field].errors && form.controls[field].touched
  }

  public isFieldOneEqualsToFieldTwo( field1: string, field2: string ) {
    return (formGroup: AbstractControl<any>): ValidationErrors | null => {
      const fieldValue1: string = formGroup.get(field1)?.value || '';
      const fieldValue2: string = formGroup.get(field2)?.value || '';

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEquals: true})
        return {
          notEquals: true
        }
      }

      formGroup.get(field2)?.setErrors(null);

      return null
    }
  }
}
