import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  get<T>(endpoint: string, params?: any): Observable<T> {
    let httpParams = new HttpParams();

    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }

    return this.http
      .get<T>(`${this.baseUrl}${endpoint}`, { params: httpParams })
      .pipe(
        timeout(5000),
        map((obj) => obj),
        catchError((e) => this.errorHandler(e)),
      );
  }

  create<T>(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, data).pipe(
      timeout(5000),
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  update<T>(endpoint: string, data: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, data).pipe(
      timeout(5000),
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  patch<T>(endpoint: string, data: T): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${endpoint}`, data).pipe(
      timeout(5000),
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`).pipe(
      timeout(5000),
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)),
    );
  }
}
