import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personal } from 'src/app/models/personal.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-details-card',
  templateUrl: './student-details-card.component.html',
  styleUrls: ['./student-details-card.component.scss'],
})
export class DetailsCardComponent implements OnInit {
  @Input() student!: Student;
  @Input() isEditing: boolean = false;
  @Output() studentChange = new EventEmitter<Student>();
  @Output() isEditingChange = new EventEmitter<boolean>();
  @Output() deleteStudent = new EventEmitter<boolean>();
  studentKeys: (keyof Student | keyof Personal)[] = [
    'id',
    'createdAt',
    'enrollment',
    'active',
    'cpf',
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
  deletestudent() {
    if (confirm('Tem certeza de que deseja desativar este estudante?')) {
      this.deleteStudent.emit(true);
    }
  }
}
