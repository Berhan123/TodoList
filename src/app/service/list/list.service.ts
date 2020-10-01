import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { gorevTur } from '../../components/tur/view';
import { from, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Gorev } from '../../components/gorev/form/gorev';

@Injectable({
  providedIn: 'root'
})


export class ListService {
  path = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  gorevtur: gorevTur;
  gorev: Gorev[];


  getGorev(): Observable<Gorev[]> {
    return this.http.get<Gorev[]>(this.path + 'gorev').pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getOnGorev(id): Observable<Gorev[]> {
    return this.http.get<Gorev[]>(this.path + 'gorev?tAdi=' + id).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
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
