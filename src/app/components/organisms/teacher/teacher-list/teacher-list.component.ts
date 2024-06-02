import { Component, OnInit } from '@angular/core';
import { TeacherMin } from 'src/app/models/teacher-min.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent {
  teachers: TeacherMin[] = [];
  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }
  loadTeachers() {
    this.teacherService.getTeachers().subscribe(
      (teachers: TeacherMin[]) => {
        this.teachers = teachers;
      },
      (error) => {
        console.error('Erro ao carregar estudantes:', error);
        this.teachers = [];
      },
    );
  }

  onUpdate(item: any) {}

  onDelete(item: any) {}
}
