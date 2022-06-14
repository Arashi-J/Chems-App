import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActiveUser, LoginResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = environment.baseUrl;

  private _activeUser!: ActiveUser;
  get activeUser() {
    return this._activeUser;
  }

  private _activeToken!: boolean;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = `${ this.baseUrl }/users/login`;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<LoginResponse>(url, formData)
      .pipe(
        tap(resp => localStorage.setItem('access_token', resp.access_token))
      );
  }

  validate_token(): Observable<boolean> {
    const url = `${ this.baseUrl }/users/active_user/`;
    const token = localStorage.getItem('access_token');

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }` || '');

    return this.http.get<ActiveUser>(url, { headers })
      .pipe(
        map(resp => {
          if (resp.username) {
            this._activeUser = resp;
            return true;
          }
          else {
            return false;
          }
        })
      );
  }

  not_active_token(): boolean {
    const url = `${ this.baseUrl }/users/active_user/`;
    const token = localStorage.getItem('access_token');


    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }` || '');

    this.http.get<any>(url, { headers })
      .pipe(
        tap({
          next: resp => {
            this._activeToken = true;
          },
          error: error => {
            this._activeToken = false;
          }
        })
      );
    console.log(this._activeToken)
    return this._activeToken;
  }
  logout() {
    localStorage.clear();
  }


}

