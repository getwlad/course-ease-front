import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  courseId!: string;
  createCourse: boolean = false;
  teacherName: string = 'Sem professor registrado.';
  course!: Course;
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params['id'];
      if (parseInt(this.courseId)) {
        this.loadCourse(parseInt(this.courseId));
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
    if (this.createCourse) {
      this.course = courseUpdate;
      this.saveNewcourse(this.course);
      this.createCourse = false;
    } else {
      this.saveChanges(this.course);
    }
    this.isEditing = false;
  }
  loadCourse(id: number) {
    this.courseService.getCourseById(id).subscribe(
      (course: Course) => {
        this.course = course;

        if (this.course.teacher) {
          if (typeof this.course.teacher === 'string') {
            this.teacherName = this.course.teacher;
          } else if (typeof this.course.teacher === 'object') {
            this.teacherName = this.course.teacher.name;
          }
        }
      },
      (error) => {
        console.error('Erro ao carregar curso:', error);
      },
    );
  }
  saveNewcourse(course: Course) {
    this.courseService.createCourse(course).subscribe(
      (course: Course) => {
        this.course = course;
      },
      (error) => {
        console.error('Erro ao salvar curso:', error);
      },
    );
  }

  deletecourse(confirmation: boolean) {
    if (confirmation && this.course.id) {
      this.courseService.deleteCourse(this.course.id).subscribe(
        () => {
          this.course.active = false;
        },
        (error) => {
          console.error('Erro ao desativar o curso:', error);
        },
      );
    }
  }
  saveChanges(course: Course) {
    this.courseService.updateCourse(course.id!, course).subscribe(
      (courseResponse: Course) => {
        this.course = courseResponse;
      },
      (error) => {
        console.error('Erro ao atualizar o curso:', error);
      },
    );
  }
}
