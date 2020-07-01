import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token=localStorage.getItem('token');
    token=token== null?'':token;
    if((token === '') && !request.url.includes("authenticate")){
      console.log('redirecting to candidate');
      this.router.navigateByUrl('/candidate');
    }
    console.log(request.url);
    const headers  = request.headers.set('Authorization',token);
    let outRequest =  request.clone({headers:headers})
    return next.handle(outRequest);
  }
}
