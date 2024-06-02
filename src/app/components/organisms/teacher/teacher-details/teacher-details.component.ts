import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.mode';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss'],
})
export class TeacherDetailsComponent implements OnInit {
  teacherId!: string;
  createTeacher: boolean = false;
  teacher!: Teacher;

  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teacherId = params['id'];
      if (parseInt(this.teacherId)) {
        this.loadTeacher(parseInt(this.teacherId));
      } else {
        this.createTeacher = true;
      }
    });
  }

  updateIsEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
  updateEndEditing(teacherUpdate: Teacher) {
    if (this.createTeacher) {
      this.teacher = teacherUpdate;
      this.saveNewTeacher(this.teacher);
      this.createTeacher = false;
    } else {
      this.teacher.active = teacherUpdate.active;
      this.teacher.experienceYears = teacherUpdate.experienceYears;
      this.teacher.specialization = teacherUpdate.specialization;
      this.teacher.personData = teacherUpdate.personData;
      this.saveChanges(this.teacher);
    }
    this.isEditing = false;
  }

  loadTeacher(id: number) {
    this.teacherService.getTeacherById(id).subscribe(
      (teacher: Teacher) => {
        this.teacher = teacher;
      },
      (error) => {
        console.error('Erro ao carregar professor:', error);
      },
    );
  }
  saveNewTeacher(teacher: Teacher) {
    this.teacherService.createTeacher(teacher).subscribe(
      (teacher: Teacher) => {
        this.teacher = teacher;
      },
      (error) => {
        console.error('Erro ao salvar professor:', error);
      },
    );
  }

  deleteTeacher(confirmation: boolean) {
    if (confirmation && this.teacher.id) {
      this.teacherService.deleteTeacher(this.teacher.id).subscribe(
        () => {
          this.teacher.active = false;
        },
        (error) => {
          console.error('Erro ao desativar o professor:', error);
        },
      );
    }
  }
  saveChanges(teacher: Teacher) {
    this.teacherService.updateTeacher(teacher.id!, teacher).subscribe(
      (teacherResponse: Teacher) => {
        this.teacher = teacherResponse;
      },
      (error) => {
        console.error('Erro ao atualizar o professor:', error);
      },
    );
  }
}
