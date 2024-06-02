import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  studentId!: string;
  createStudent: boolean = false;
  student!: Student;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = params['id'];
      if (parseInt(this.studentId)) {
        this.loadStudent(parseInt(this.studentId));
      } else {
        this.createStudent = true;
      }
    });
  }

  updateIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
  updateEndEditing(studentUpdate: Student) {
    if (this.createStudent) {
      this.student = studentUpdate;
      this.saveNewstudent(this.student);
      this.createStudent = false;
    } else {
      this.student.active = studentUpdate.active;
      this.student.personData = studentUpdate.personData;
      this.saveChanges(this.student);
    }
    this.isEditing = false;
  }
  loadStudent(id: number) {
    this.studentService.getStudentById(id).subscribe(
      (student: Student) => {
        this.student = student;
      },
      (error) => {
        console.error('Erro ao carregar professor:', error);
      },
    );
  }
  saveNewstudent(student: Student) {
    this.studentService.createStudent(student).subscribe(
      (student: Student) => {
        this.student = student;
      },
      (error) => {
        console.error('Erro ao salvar professor:', error);
      },
    );
  }

  deletestudent(confirmation: boolean) {
    if (confirmation && this.student.id) {
      this.studentService.deleteStudent(this.student.id).subscribe(
        () => {
          this.student.active = false;
        },
        (error) => {
          console.error('Erro ao desativar o professor:', error);
        },
      );
    }
  }
  saveChanges(student: Student) {
    this.studentService.updateStudent(student.id!, student).subscribe(
      (studentResponse: Student) => {
        this.student = studentResponse;
      },
      (error) => {
        console.error('Erro ao atualizar o professor:', error);
      },
    );
  }
}
