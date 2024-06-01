import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login(credentials: { username: string; password: string }) {
    const { username, password } = credentials;
    this.loading = true;
    this.authService.login(new User(username, password)).subscribe(
      (response) => {
        this.authService.showMsg('Login bem-sucedido');
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log(error);
        this.authService.showMsg(
          'Erro ao fazer login: ' + error.error.error,
          true,
        );
        this.loading = false;
      },
      () => {
        this.loading = false;
      },
    );
  }
}
