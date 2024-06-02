import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Personal } from 'src/app/models/personal.model';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  @Input() student!: Student;
  @Input() createStudent: boolean = false;
  @Output() isEditingEnd = new EventEmitter<Student>();
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) {
    this.studentForm = this.fb.group({
      cpf: [{ value: '', disabled: true }, Validators.required],
      enrollment: [{ value: '', disabled: true }],
      active: [true, Validators.required],
      createdAt: [{ value: new Date(), disabled: true }],
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.createStudent) {
      this.studentForm.get('cpf')?.enable();
      return;
    }
    if (this.student) {
      this.studentForm.patchValue({
        cpf: this.student.cpf,
        enrollment: this.student.enrollment,
        active: this.student.active,
        createdAt: this.datePipe.transform(
          this.student.createdAt,
          'dd/MM/yyyy',
        ),
        name: this.student.personData.name,
        birthDate: this.datePipe.transform(
          this.student.personData.birthDate,
          'dd/MM/yyyy',
        ),
        email: this.student.personData.email,
        phone: this.student.personData.phone,
        gender: this.student.personData.gender,
      });
    }
  }

  getFormControl(controlName: string): FormControl {
    return this.studentForm.get(controlName) as FormControl;
  }

  save() {
    if (this.studentForm.valid) {
      const personData: Personal = {
        name: this.studentForm.value.name,
        birthDate: new Date(this.studentForm.value.birthDate).toISOString(),
        email: this.studentForm.value.email,
        phone: this.studentForm.value.phone,
        gender: this.studentForm.value.gender,
      };

      let updatedStudent: Student = {
        cpf: this.studentForm.value.cpf,
        ...{ personData },
      };

      if (!this.createStudent) {
        updatedStudent = {
          ...this.student,
          active:
            this.studentForm.value.active == 'true' ||
            this.studentForm.value.active == true,
          ...{ personData },
        };
      }

      this.isEditingEnd.emit(updatedStudent);
    } else {
      console.error('Formulário inválido.');
    }
  }
}
