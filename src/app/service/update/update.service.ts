import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Gorev } from '../../components/gorev/form/gorev';
import { ListService } from '../list/list.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  path = 'http://localhost:3000/';
  constructor(private http: HttpClient, private listService: ListService) { }
  gorev: Gorev[];

  // tslint:disable-next-line: typedef
  updateGorevModul(ids, status) {
    this.listService.getOnGorev(ids).subscribe(data => { this.gorev = data; });
    return this.gorev;
  }

  // tslint:disable-next-line: typedef
  updateGorev(id, gstatus, model): Observable<Gorev> {

    return this.http.put<Gorev>(this.path + 'gorev/' + id, { status: gstatus })
      .pipe(
        retry(1),
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
