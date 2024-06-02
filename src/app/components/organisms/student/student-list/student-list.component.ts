import { Component, OnInit } from '@angular/core';
import { StudentMin } from 'src/app/models/student-min.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: StudentMin[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents() {
    this.studentService.getStudents().subscribe(
      (students: StudentMin[]) => {
        this.students = students;
      },
      (error) => {
        console.error('Erro ao carregar estudantes:', error);
        this.students = [];
      },
    );
  }

  onUpdate(item: any) {}

  onDelete(item: any) {}
}
