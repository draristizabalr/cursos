import { AbstractControl, FormArray, FormGroup, ValidationErrors } from '@angular/forms';

const usernamesUsed = ['Zulacop', 'Strider', 'Pfar', 'Nat1008'];

// Expresiones regulares
export const namePattern = '^([a-zA-Z]+) ([a-zA-Z]+)$';
export const emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

function getTextError(errors: ValidationErrors): string | null {
  for (const key of Object.keys(errors)) {
    switch (key) {
      case 'required':
        return 'Este campo es requerido';
      case 'minlength':
        return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
      case 'min':
        return `Valor mínimo de ${errors['min'].min}`;
      case 'email':
        return `El valor ingresado no es un correo electrónico`;
      case 'pattern':
        return patternErrors(errors[key]);
      case 'emailTaken':
        return 'El correo electrónico ya está siendo usado por otro usuario.'
      case 'usernameUsed':
        return `El nombre de usuario ${errors['actualValue']} ya está siendo usado.`
      default:
        return `Error de validación no controlado ${key}`;
    }
  }

  return null;
}

function patternErrors(error: {
  requiredPattern: string;
  actualValue: string;
}): string | null {
  if (error.requiredPattern === namePattern) {
    return 'El valor indicado no corresponde a un nombre y apellido';
  }

  if (error.requiredPattern === emailPattern) {
    return 'El valor escrito no corresponde a un correo electrónico';
  }

  if (error.requiredPattern === notOnlySpacesPattern) {
    return 'No puede tener espacios';
  }

  return null;
}

async function sleep() {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve(true)
    }, 2500);
  })
}

export class FormUtils {
  myForm: FormGroup;

  constructor(form: FormGroup) {
    this.myForm = form;
  }

  static isFieldOneEqualsFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      return field1Value === field2Value
        ? null
        : {
            passwordsNotEqual: true,
          };
    };
  }

  static async checkingServerResponse(control: AbstractControl): Promise<ValidationErrors | null> {
    console.log('Validando contra servidor');

    await sleep();
    const formValue = control.value;

    if (formValue === 'hola@mundo.com') {
      return { emailTaken: true };
    }

    return null;
  }

  static usernameUsed(formControl: AbstractControl): ValidationErrors | null {
    console.log('Buscando nombre de usuario');
    console.log(formControl.value);
    if (!formControl.value) return null;

    if (usernamesUsed.includes(formControl.value)) return { usernameUsed: true, actualValue: formControl.value };

    return null;
  }

  isValidField(fieldName: string): boolean | null {
    return (
      this.myForm.controls[fieldName].errors &&
      !!this.myForm.controls[fieldName].touched
    );
  }

  getfieldError(fieldName: string): string | null {
    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    return getTextError(errors);
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  getfieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return getTextError(errors);
  }
}
