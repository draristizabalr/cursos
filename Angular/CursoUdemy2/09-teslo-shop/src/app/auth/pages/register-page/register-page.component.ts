import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export default class RegisterPageComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  hasError = signal(false);
  isPosting = signal(false);

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    fullName: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.registerForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      },5000);
      return;
    }

    const { email = '', password = '', fullName = '' } = this.registerForm.value;

    this.authService.register(email!, password!, fullName!).subscribe((isRegistred) => {
      if (isRegistred) {
        this.router.navigateByUrl('/auth/login');
        return;
      }

      this.hasError.set(true);
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      },5000);
    });
  }
}
