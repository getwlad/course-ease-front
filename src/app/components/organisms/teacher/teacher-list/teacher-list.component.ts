import { Component } from '@angular/core';
import { TeacherMin } from 'src/app/models/teacher-min.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent {
  teachers: TeacherMin[] = [
    {
      id: 1,
      name: 'Baes Doe',
      createdAt: new Date(),
      specialization: 'Programação',
      experienceYears: 6,
      active: true,
    },
    {
      id: 1,
      name: 'Baes Doe',
      createdAt: new Date(),
      specialization: 'Programação',
      experienceYears: 6,
      active: true,
    },
    {
      id: 1,
      name: 'Baes Doe',
      createdAt: new Date(),
      specialization: 'Programação',
      experienceYears: 6,
      active: true,
    },
    {
      id: 1,
      name: 'Baes Doe',
      createdAt: new Date(),
      specialization: 'Programação',
      experienceYears: 6,
      active: true,
    },
    {
      id: 1,
      name: 'Baes Doe',
      createdAt: new Date(),
      specialization: 'Programação',
      experienceYears: 6,
      active: true,
    },
    {
      id: 1,
      name: 'Baes Doe',
      createdAt: new Date(),
      specialization: 'Programação',
      experienceYears: 6,
      active: true,
    },
  ];

  onSubmit(name: string) {}

  onUpdate(item: any) {}

  onDelete(item: any) {}
}
