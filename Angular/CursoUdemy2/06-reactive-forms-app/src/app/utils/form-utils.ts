import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

function getTextError(errors: ValidationErrors): string | null {
  for (const key of Object.keys(errors)) {
    switch (key) {
      case 'required':
        return 'Este campo es requerido';
      case 'minlength':
        return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
      case 'min':
        return `Valor mínimo de ${errors['min'].min}`;
    }
  }

  return null;
}

export class FormUtils {
  myForm: FormGroup;

  constructor(form: FormGroup) {
    this.myForm = form;
  }

  // Expresiones regulares

  isValidField(fieldName: string): boolean | null {
    return (
      this.myForm.controls[fieldName].errors && !!this.myForm.controls[fieldName].touched
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
