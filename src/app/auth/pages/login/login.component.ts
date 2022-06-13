import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['juan.perez', [Validators.required]],
    password: ['123456', [Validators.required]],
  });

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  login() {
    const {username, password} = this.loginForm.value
    this.auth.login(username, password)
      .subscribe(resp => {
        console.log('logged')
      }
      )
  }

}
