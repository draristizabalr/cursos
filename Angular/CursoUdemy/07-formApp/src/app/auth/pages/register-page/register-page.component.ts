import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorsService } from '../../../shared/validators/email-validators.service';

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

  @Inject(FormBuilder) private fb: FormBuilder = new FormBuilder()
  @Inject(ValidatorsService) private validatorsService: ValidatorsService = new ValidatorsService()
  @Inject(EmailValidatorsService) private emailValidatorsService: EmailValidatorsService = new EmailValidatorsService()

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidatorsService]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [
      this.validatorsService.isFieldOneEqualsToFieldTwo('password', 'password2')
    ]
  })

  onSave(): void {
    this.myForm.markAllAsTouched()
  }

  isValidField( field: string ): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field)
  }

}
