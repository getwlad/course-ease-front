import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { StudentMin } from 'src/app/models/student-min.model';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';

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
  editingStudents: boolean = false;
  addStudentsIds: number[] = [];
  removeStudentsIds: number[] = [];
  students!: StudentMin[];
  updatedCourse!: Course;
  loadingStudents: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private studentsService: StudentService,
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
  loadStudents() {
    this.studentsService
      .getStudents({ matriculate: 'false', active: 'true' })
      .subscribe((studentsRes: StudentMin[]) => {
        this.students = studentsRes;
        this.loadingStudents = false;
        this.editingStudents = true;
      });
    this.loadingStudents = true;
    setTimeout(() => {
      if (!this.students) {
        this.loadingStudents = false;
        this.studentsService.showMsg(
          'Ocorreu um erro ao carregar os dados, tente novamente',
          true,
        );
      }
    }, 5000);
  }
  toggleEditingStudent() {
    this.addStudentsIds = [];
    this.removeStudentsIds = [];
    if (!this.editingStudents) {
      this.loadStudents();
    }
    this.editingStudents = false;
  }

  updateEditingStudent() {
    this.studentsService.showMsg('Atualizando...aguarde');
    this.loadingStudents = true;

    if (this.addStudentsIds.length > 0) {
      this.courseService
        .addStudents(this.course.id!, this.addStudentsIds)
        .subscribe((response) => {
          this.verifyChangedStudents(response, 'adicionados');
          this.loadingStudents = false;
        });
    }
    if (this.removeStudentsIds.length > 0) {
      this.courseService
        .removeStudents(this.course.id!, this.removeStudentsIds)
        .subscribe((response) => {
          this.verifyChangedStudents(response, 'removidos');
          this.loadingStudents = false;
        });
    }
    setTimeout(() => {
      if (this.loadingStudents) {
        this.loadingStudents = false;
        this.studentsService.showMsg('Ocorreu um erro, tente novamente', true);
      }
    }, 5000);

    this.addStudentsIds = [];
    this.removeStudentsIds = [];
    if (this.removeStudentsIds.length <= 0 && this.addStudentsIds.length <= 0) {
      this.loadingStudents = false;
    }
  }

  verifyChangedStudents(response: any, s: string) {
    if (response.success && response.success.length > 0) {
      this.studentsService.showMsg('Estudantes ' + s + ' com sucesso.');
      this.loadCourse(this.course.id!);
      this.loadStudents();
    }
    if (response.failed && response.failed.length > 0) {
      this.studentsService.showMsg('Alguns estudantes não foram ' + s + '.');
    }
  }
  updateIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
  updateEndEditing(courseUpdate: Course) {
    this.updatedCourse = {
      ...this.course,
      name: courseUpdate.name,
      category: courseUpdate.category,
      description: courseUpdate.description,
      active: courseUpdate.active,
    };
    if (this.createCourse) {
      this.saveNewcourse(courseUpdate);
      this.createCourse = false;
    } else {
      this.saveChanges(this.updatedCourse);
    }
    this.isEditing = false;
  }
  loadCourse(id: number) {
    this.courseService.getCourseById(id).subscribe(
      (courseRes: Course) => {
        this.course = courseRes;
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
      (courseRes: Course) => {
        this.course = courseRes;
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
        this.course = { ...this.course, ...courseResponse };
      },
      (error) => {
        console.error('Erro ao atualizar o curso:', error);
      },
    );
  }
}
