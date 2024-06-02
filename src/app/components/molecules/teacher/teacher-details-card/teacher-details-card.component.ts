import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personal } from 'src/app/models/personal.model';
import { Teacher } from 'src/app/models/teacher.mode';

@Component({
  selector: 'app-teacher-details-card',
  templateUrl: './teacher-details-card.component.html',
  styleUrls: ['./teacher-details-card.component.scss'],
})
export class TeacherDetailsCardComponent implements OnInit {
  @Input() teacher!: Teacher;
  @Input() isEditing: boolean = false;
  @Output() teacherChange = new EventEmitter<Teacher>();
  @Output() isEditingChange = new EventEmitter<boolean>();
  @Output() deleteTeacher = new EventEmitter<boolean>();
  teacherKeys: (keyof Teacher | keyof Personal)[] = [
    'id',
    'createdAt',
    'cpfCnpj',
    'specialization',
    'active',
    'experienceYears',
    'courseId',
    'name',
    'birthDate',
    'phone',
    'email',
    'gender',
  ];
  constructor() {}

  ngOnInit(): void {}
  toggleEditing() {
    this.isEditing = !this.isEditing;
    this.isEditingChange.emit(this.isEditing);
  }
  deleteteacher() {
    if (confirm('Tem certeza de que deseja desativar este estudante?')) {
      this.deleteTeacher.emit(true);
    }
  }
}
