import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Personal } from 'src/app/models/personal.model';
import { Teacher } from 'src/app/models/teacher.mode';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss'],
})
export class TeacherFormComponent implements OnInit {
  @Input() teacher!: Teacher;
  @Input() createTeacher: boolean = false;
  @Output() isEditingEnd = new EventEmitter<Teacher>();
  @Output() isEditing = new EventEmitter<boolean>();
  teacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location,
  ) {
    this.teacherForm = this.fb.group({
      cpfCnpj: [{ value: '', disabled: true }, Validators.required],
      specialization: ['', Validators.required],
      experienceYears: ['', Validators.required],
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
    if (this.createTeacher) {
      this.teacherForm.get('cpfCnpj')?.enable();
      return;
    }
    if (this.teacher) {
      this.teacherForm.patchValue({
        cpfCnpj: this.teacher.cpfCnpj,
        specialization: this.teacher.specialization,
        experienceYears: this.teacher.experienceYears,
        active: this.teacher.active,
        createdAt: this.teacher.createdAt,
        name: this.teacher.personData.name,
        birthDate: this.teacher.personData.birthDate,
        email: this.teacher.personData.email,
        phone: this.teacher.personData.phone,
        gender: this.teacher.personData.gender,
      });
    }
  }

  getFormControl(controlName: string): FormControl {
    return this.teacherForm.get(controlName) as FormControl;
  }

  cancel() {
    if (this.createTeacher) {
      this.location.back();
    }
    this.isEditing.emit(false);
  }
  save() {
    if (this.teacherForm.valid) {
      const personData: Personal = {
        name: this.teacherForm.value.name,
        birthDate: this.teacherForm.value.birthDate,
        email: this.teacherForm.value.email,
        phone: this.teacherForm.value.phone,
        gender: this.teacherForm.value.gender,
      };

      let updatedTeacher: Teacher = {
        cpfCnpj: this.teacherForm.value.cpfCnpj,
        specialization: this.teacherForm.value.specialization,
        experienceYears: this.teacherForm.value.experienceYears,
        active: true,
        ...{ personData },
      };

      if (!this.createTeacher) {
        updatedTeacher = {
          ...this.teacher,
          specialization: this.teacherForm.value.specialization,
          experienceYears: this.teacherForm.value.experienceYears,
          active:
            this.teacherForm.value.active == 'true' ||
            this.teacherForm.value.active == true,
          ...{ personData },
        };
      }

      this.isEditingEnd.emit(updatedTeacher);
    } else {
      console.error('Formulário inválido.');
    }
  }
}
