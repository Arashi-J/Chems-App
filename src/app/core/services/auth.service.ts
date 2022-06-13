import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActiveUser, LoginResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;

  private _user!: ActiveUser;
  get user() {
    return this._user;
  }

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = `${ this.baseUrl }/users/login`;

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    return this.http.post<LoginResponse>(url, formData)
      .pipe(
        tap(resp => {
          console.log(resp);
          if (resp.access_token){
            localStorage.setItem('access_token', resp.access_token)
          }
        })
      );
  }


}

