import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.mode';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss'],
})
export class TeacherDetailsComponent implements OnInit {
  teacherId!: string;
  createTeacher: boolean = false;
  teacher: Teacher = {
    id: 1,
    cpfCnpj: '12345678900',
    specialization: 'Programação',
    experienceYears: 5,
    active: true,
    personData: {
      name: 'João Silva',
      birthDate: new Date('1990-01-01'),
      phone: '62999686868',
      email: 'joao.silva@email.com',
      gender: 'masculino',
    },
    createdAt: new Date(),
    course: {
      id: 1,
      name: 'Introdução à Programação',
      description: 'Um curso introdutório sobre programação.',
      category: 'blabla',
      active: true,
      createdAt: new Date(),
      teacher: 'João Silva',
    },
  };
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teacherId = params['id'];
      if (parseInt(this.teacherId)) {
        //this.studentService.getStudent(this.studentId).subscribe((student) => { this.student = student;});
      } else {
        this.createTeacher = true;
      }
    });
  }

  updateIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
  updateEndEditing(teacherUpdate: Teacher) {
    this.teacher.active = teacherUpdate.active;
    this.teacher.experienceYears = teacherUpdate.experienceYears;
    this.teacher.specialization = teacherUpdate.specialization;
    this.teacher.personData = teacherUpdate.personData;
    console.log(this.teacher);
    this.isEditing = false;
    if (this.createTeacher) {
      this.teacher = teacherUpdate;
      this.createTeacher = false;
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
