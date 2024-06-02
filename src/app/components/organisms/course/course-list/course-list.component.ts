import { Component } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  courses: Course[] = [
    {
      id: 1,
      name: 'Darsses o de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
    {
      name: 'Curso de manutenção de pc',
      createdAt: new Date(),
      description: 'Curso de batismo',
      category: 'Programação',
      active: true,
      teacher: 'Usuario 1214',
    },
  ];

  onSubmit(name: string) {}

  onUpdate(item: any) {}

  onDelete(item: any) {}
}
