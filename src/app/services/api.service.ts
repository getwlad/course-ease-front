import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://courseease.onrender.com/';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {}

  showMsg(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMsg('Ocorreu algum erro', true);
    return EMPTY;
  }

  read(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }
}
