import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import {
  LoginResponse,
  RegisteredUser,
} from './interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://courseease.onrender.com';
  private isLoggedInSubject = new Subject<boolean>();
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

  login(user: User): Observable<LoginResponse> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, user).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        this.emitLoginStatus(true);
      }),
    );
  }

  register(user: User): Observable<RegisteredUser> {
    return this.http
      .post<any>(`${this.baseUrl}/auth/register`, user)
      .pipe(tap((response) => {}));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.emitLoginStatus(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  emitLoginStatus(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  onLoginStatusChange(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
