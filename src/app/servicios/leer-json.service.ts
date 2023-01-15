import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LeerJsonService {

  constructor(private http: HttpClient) { }

  public getJSON(archivoJSON:string): Observable<any> {
    return this.http.get(archivoJSON);
  }

}
