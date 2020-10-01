import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Gorev } from '../../components/gorev/form/gorev';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { gorevTur } from '../../components/tur/view';

@Injectable({
  providedIn: 'root'
})



export class AddService {
  path = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  addGorev(gorev: Gorev): Observable<Gorev> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token'
      })
      // tslint:disable-next-line: align
    }; return this.http.post<Gorev>(this.path + '/gorev', gorev, httpOptions).pipe(tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }
  addTur(gorev: gorevTur): Observable<Gorev> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token'
      })
      // tslint:disable-next-line: align
    }; return this.http.post<Gorev>(this.path + '/tur', gorev, httpOptions).pipe(tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError));
  }
  // tslint:disable-next-line: typedef
  handleError(err: HttpErrorResponse) {
    let erorMessage = '';
    if (err.error instanceof ErrorEvent) {
      erorMessage = 'Bir hata Oluştu. ' + err.error.message;
    }
    else {
      erorMessage = 'Sistemsel Bir Hata.';
    }
    return throwError(erorMessage);
  }
}
