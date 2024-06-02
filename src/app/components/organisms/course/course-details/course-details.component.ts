import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Teacher } from 'src/app/models/teacher.mode';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  courseId!: string;
  createCourse: boolean = false;
  teacherName: string = 'Sem professor registrado.';
  course: Course = {
    id: 1,
    name: 'Introdução à Programação',
    description: 'Um curso introdutório sobre programação.',
    category: 'blabla',
    active: true,
    createdAt: new Date(),
    teacher: 'João Silva',
    students: [
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
    ],
  };
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params['id'];
      if (parseInt(this.courseId)) {
        //this.studentService.getStudent(this.studentId).subscribe((student) => { this.student = student;});
        if (this.course.teacher) {
          if (typeof this.course.teacher === 'string') {
            this.teacherName = this.course.teacher;
          } else if (this.course.teacher instanceof Teacher) {
            this.teacherName = this.course.teacher.personData.name;
          }
        }
      } else {
        this.createCourse = true;
      }
    });
  }

  updateIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
  updateEndEditing(courseUpdate: Course) {
    this.course = {
      ...this.course,
      name: courseUpdate.name,
      category: courseUpdate.category,
      description: courseUpdate.description,
      active: courseUpdate.active,
    };
    console.log(this.course);
    this.isEditing = false;
    if (this.createCourse) {
      this.course = courseUpdate;
      this.createCourse = false;
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
