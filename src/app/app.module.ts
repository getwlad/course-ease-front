import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CourseListPage } from './pages/course/course-list-page/course-list-page.component';
import { StudentListPageComponent } from './pages/student/student-list-page/student-list-page.component';
import { TeacherListPageComponent } from './pages/teacher/teacher-list-page/teacher-list-page.component';
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
import { ItensListComponent } from './components/molecules/itens-list/itens-list.component';
import { CourseListComponent } from './components/organisms/course/course-list/course-list.component';
import { SearchInputComponent } from './components/atoms/search-input/search-input.component';
import { ItemStatusComponent } from './components/atoms/item-status/item-status.component';
import { ItemDetailsComponent } from './components/atoms/item-details/item-details.component';
import { StudentListComponent } from './components/organisms/student/student-list/student-list.component';
import { TeacherListComponent } from './components/organisms/teacher/teacher-list/teacher-list.component';
import { CourseDetailsPageComponent } from './pages/course/course-details-page/course-details-page.component';
import { StudentDetailsPageComponent } from './pages/student/student-details-page/student-details-page.component';
import { TeacherDetailsPageComponent } from './pages/teacher/teacher-details-page/teacher-details-page.component';
import { InputFormComponent } from './components/atoms/input-form/input-form.component';

import { TeacherFormComponent } from './components/molecules/teacher-form/teacher-form.component';
import { CourseFormComponent } from './components/molecules/course-form/course-form.component';
import { StudentDetailComponent } from './components/organisms/student/student-detail/student-detail.component';
import { StudentFormComponent } from './components/molecules/student-form/student-form.component';
import { DetailsCardComponent } from './components/molecules/student-details-card/student-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent,
    CardComponent,
    MainLayoutComponent,
    CourseItemComponent,
    CourseListPage,
    StudentListPageComponent,
    TeacherListPageComponent,
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
    ItensListComponent,
    CourseListComponent,
    SearchInputComponent,
    ItemStatusComponent,
    ItemDetailsComponent,
    StudentListComponent,
    TeacherListComponent,
    CourseDetailsPageComponent,
    StudentDetailsPageComponent,
    TeacherDetailsPageComponent,
    InputFormComponent,
    StudentFormComponent,
    TeacherFormComponent,
    CourseFormComponent,
    StudentDetailComponent,
    DetailsCardComponent,
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
    FormsModule,
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
