import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  studentId!: string;
  createStudent: boolean = false;
  student: Student = {
    id: 1,
    createdAt: new Date(),
    enrollment: 'Programação',
    active: true,
    cpf: '12345678900',
    personData: {
      name: 'qwewqe',
      birthDate: new Date(),
      phone: '62999686868',
      email: 'okook@email.com',
      gender: 'masculino',
    },
  };
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = params['id'];
      if (parseInt(this.studentId)) {
        //this.studentService.getStudent(this.studentId).subscribe((student) => { this.student = student;});
      } else {
        this.createStudent = true;
      }
    });
  }

  updateIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
  updateEndEditing(studentUpdate: Student) {
    this.student.active = studentUpdate.active;
    this.student.personData = studentUpdate.personData;
    console.log(this.student);
    this.isEditing = false;
    if (this.createStudent) {
      this.student = studentUpdate;
      this.createStudent = false;
    }
  }
  saveChanges() {
    //this.studentService.updateStudent(this.student).subscribe(() => {});
  }

  deleteStudent() {
    if (confirm('Tem certeza de que deseja desativar este estudante?')) {
      //this.studentService.deleteStudent(this.studentId).subscribe(() => {});
    }
  }
  updateStudent() {
    if (confirm('Tem certeza de que deseja desativar este estudante?')) {
      //this.studentService.deleteStudent(this.studentId).subscribe(() => {});
    }
  }
}
