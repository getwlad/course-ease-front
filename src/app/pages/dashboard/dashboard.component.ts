import { Component, OnInit } from '@angular/core';
import { DashboardRelatory } from 'src/app/models/dashboard-relatory..model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalCourses: number = 10;
  newCourses: number = 3;
  activeCourses: number = 7;
  totalStudents: number = 200;
  activeStudents: number = 150;
  enrolledStudents: number = 180;
  totalTeachers: number = 20;
  activeTeachers: number = 15;
  teachingTeachers: number = 10;
  coursesMostEnrolled: any[] = [
    { name: 'Curso A', students: 20 },
    { name: 'Curso B', students: 30 },
    { name: 'Curso C', students: 50 },
  ];
  totalGender = { male: 80, female: 70, others: 10 };
  recentlyRegistered = [
    { nome: 'João', curso: 'Curso A', ativo: true, createdAt: new Date() },
    { nome: 'Maria', curso: 'Curso B', ativo: false, createdAt: new Date() },
  ];

  dashboardRelatory = new DashboardRelatory(
    this.totalCourses,
    this.newCourses,
    this.activeCourses,
    this.totalStudents,
    this.activeStudents,
    this.enrolledStudents,
    this.totalTeachers,
    this.activeTeachers,
    this.teachingTeachers,
    this.coursesMostEnrolled,
    this.totalGender,
    this.recentlyRegistered,
  );

  constructor() {}

  ngOnInit(): void {}
}
