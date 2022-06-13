import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  // loginForm: FormGroup = this.fb.group({
  //   username: ['juan.perez', [Validators.required]],
  //   password: ['123456', [Validators.required]],
  // });

  controls = {
    username: this.fb.control<string>('juan.perez', [Validators.required,],),
    password: this.fb.control<string>('123456', [Validators.required])
  }

  loginForm: FormGroup<{
    username: FormControl<string>,
    password: FormControl<string>
  }> = this.fb.group(this.controls);

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) { }


  login() {
    const { username, password } = this.loginForm.value;
    this.auth.login(username!, password!)
      .subscribe(resp => {
        console.log('logged');
      }
      );
  }

}
