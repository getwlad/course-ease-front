import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;
  loginForm = new FormGroup({
    username: new FormControl('john_doe', Validators.required),
    password: new FormControl('Password@123', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      ),
    ]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      const username: string = this.loginForm.value.username ?? '';
      const password: string = this.loginForm.value.password ?? '';
      this.authService.login(username, password).subscribe(
        (response) => {
          this.authService.showMsg('Login bem-sucedido');
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          this.authService.showMsg('Erro ao fazer login' + error.message, true);
        },
        () => {
          this.loading = false;
        },
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
