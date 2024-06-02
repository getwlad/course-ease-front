import { Component } from '@angular/core';
import { StudentMin } from 'src/app/models/student-min.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students: StudentMin[] = [
    {
      id: 1,
      name: 'John Doe',
      createdAt: new Date(),
      enrollment: 'Programação',
      active: true,
    },
    {
      id: 1,
      name: 'John Doe',
      createdAt: new Date(),
      enrollment: 'Programação',
      active: true,
    },
    {
      id: 1,
      name: 'John Doe',
      createdAt: new Date(),
      enrollment: 'Programação',
      active: true,
    },
    {
      id: 1,
      name: 'John Doe',
      createdAt: new Date(),
      enrollment: 'Programação',
      active: true,
    },
    {
      id: 1,
      name: 'John Doe',
      createdAt: new Date(),
      enrollment: 'Programação',
      active: true,
    },
  ];

  onSubmit(name: string) {}

  onUpdate(item: any) {}

  onDelete(item: any) {}
}
