import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/atoms/button/button.component';
import { CardComponent } from './components/molecules/card/card.component';
import { MainLayoutComponent } from './components/templates/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { CourseItemComponent } from './components/atoms/course-item/course-item.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { NaoEncontradaComponent } from './pages/nao-encontrada/nao-encontrada.component';
import { SummaryCardComponent } from './components/organisms/summary-card/summary-card.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartsComponent } from './components/organisms/charts/charts.component';
import { DashListComponent } from './components/organisms/dash-list/dash-list.component';
import { AuthService } from './services/authentication/auth.service';
import { AuthInterceptor } from './services/authentication/auth.interceptor';
import { InputComponent } from './components/atoms/input/input.component';
import { AuthFormComponent } from './components/molecules/auth-form/auth-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './components/organisms/login/login.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterComponent } from './components/organisms/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent,
    CardComponent,
    MainLayoutComponent,
    CourseItemComponent,
    CursosComponent,
    AlunosComponent,
    ProfessoresComponent,
    NaoEncontradaComponent,
    SummaryCardComponent,
    HeaderComponent,
    FooterComponent,
    ChartsComponent,
    DashListComponent,
    LoginComponent,
    RegisterComponent,
    InputComponent,
    AuthFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    NgChartsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
