import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { gorevTur } from '../../components/tur/view';
import { Gorev } from '../../components/gorev/form/gorev';


@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  path = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  gorevtur: gorevTur;

  // tslint:disable-next-line: typedef
  deleteTur(id) {
    return this.http.delete<gorevTur>(this.path + 'tur/' + id)
      .pipe(
        retry(1)
      );
  }
   // tslint:disable-next-line: typedef
  deleteGorev(id) {
    return this.http.delete<Gorev>(this.path + 'gorev/' + id)
      .pipe(
        retry(1)
      );
  }
}
