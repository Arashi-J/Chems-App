import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingRequestService } from './loading-request.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loadingRqSrv: LoadingRequestService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingRqSrv.show();
    return next.handle(req).pipe(
      finalize(() => this.loadingRqSrv.hide())
    );
  }
}
