import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  baseUrl: string = environment.baseUrl;
  token = localStorage.getItem('access_token');

  headers = new HttpHeaders()
    .set('Authorization', `Bearer ${ this.token }` || '');

  constructor(private http: HttpClient) { }



  get_items<Type>(endpoint: string): Observable<Type[]> {
    const url = `${ this.baseUrl }/${ endpoint }/`;
    const headers = this.headers;
    return this.http.get<Type[]>(url, { headers });
  }

}
