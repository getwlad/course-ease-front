import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  register(credentials: { username: string; password: string }) {
    const { username, password } = credentials;
    this.loading = true;
    this.authService.register(new User(username, password)).subscribe(
      (response) => {
        this.authService.showMsg('Cadastro bem-sucedido');
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.authService.showMsg(
          'Erro ao cadastrar: ' + error.error.message,
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
