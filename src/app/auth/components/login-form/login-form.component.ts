import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth.service';
import { FormValidatorService } from 'src/app/core/services/form-validator.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  controls = {
    username: this.fb.control<string>('juan.perez', [Validators.required,],),
    password: this.fb.control<string>('123456', [Validators.required])
  };

  loginForm: FormGroup<{
    username: FormControl<string>,
    password: FormControl<string>;
  }> = this.fb.group(this.controls);

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private fv: FormValidatorService
  ) { }

  formValidator(): boolean {
    return this.fv.formValidation(this.loginForm);
  }

  login() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username!, password!)
      .subscribe({
        next: resp => this.router.navigateByUrl('/main'),
        error: error => console.error(error.error)
      });
  }
}