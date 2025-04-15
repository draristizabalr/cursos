import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  emailPattern,
  FormUtils,
  namePattern,
  notOnlySpacesPattern,
} from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required, Validators.pattern(namePattern)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)], [FormUtils.checkingServerResponse]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(notOnlySpacesPattern),
          FormUtils.usernameUsed,
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [
        FormUtils.isFieldOneEqualsFieldTwo('password', 'confirmPassword'),
      ],
    },
  );
  formUtils = new FormUtils(this.myForm);

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
