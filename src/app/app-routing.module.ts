import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { ProfessoresComponent } from './pages/professores/professores.component';
import { NaoEncontradaComponent } from './pages/nao-encontrada/nao-encontrada.component';
import { AuthGuard } from './auth.guard';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

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
  { path: 'courses', component: CursosComponent, canActivate: [AuthGuard] },
  { path: 'students', component: AlunosComponent, canActivate: [AuthGuard] },
  {
    path: 'teachers',
    component: ProfessoresComponent,
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
