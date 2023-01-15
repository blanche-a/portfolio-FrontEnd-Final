import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JwtDto } from '../modelo/jwt-dto';
import { NuevoUsuario } from '../modelo/nuevo-usuario';
import { LoginUsuario } from '../modelo/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL:string = 'http://localhost:8080/auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo',nuevoUsuario);
  }
  public login(loginUsuario:LoginUsuario):Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
  }
}
