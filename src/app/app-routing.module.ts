import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CourseListPage } from './pages/course/course-list-page/course-list-page.component';
import { StudentListPageComponent } from './pages/student/student-list-page/student-list-page.component';
import { TeacherListPageComponent } from './pages/teacher/teacher-list-page/teacher-list-page.component';
import { NaoEncontradaComponent } from './pages/nao-encontrada/nao-encontrada.component';
import { AuthGuard } from './auth.guard';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { StudentDetailsPageComponent } from './pages/student/student-details-page/student-details-page.component';
import { CourseDetailsPageComponent } from './pages/course/course-details-page/course-details-page.component';
import { TeacherDetailsPageComponent } from './pages/teacher/teacher-details-page/teacher-details-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'courses', component: CourseListPage, canActivate: [AuthGuard] },
  {
    path: 'students',
    component: StudentListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teachers',
    component: TeacherListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student/:id',
    component: StudentDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student/new',
    component: StudentDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'course/:id',
    component: CourseDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'course/new',
    component: CourseDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teacher/:id',
    component: TeacherDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teacher/new',
    component: TeacherDetailsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
