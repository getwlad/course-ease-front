import { DatePipe } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  @Input() course!: Course;
  @Input() createCourse: boolean = false;
  @Output() isEditingEnd = new EventEmitter<Course>();
  @Output() isEditing = new EventEmitter<boolean>();
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private location: Location,
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      active: [true, Validators.required],
      createdAt: [{ value: new Date(), disabled: true }],
    });
  }

  ngOnInit(): void {
    if (this.createCourse) {
      return;
    }
    if (this.course) {
      this.courseForm.patchValue({
        name: this.course.name,
        category: this.course.category,
        description: this.course.description,
        active: this.course.active,
        createdAt: this.course.createdAt,
      });
    }
  }

  getFormControl(controlName: string): FormControl {
    return this.courseForm.get(controlName) as FormControl;
  }
  cancel() {
    if (this.createCourse) {
      this.location.back();
    }
    this.isEditing.emit(false);
  }
  save() {
    if (this.courseForm.valid) {
      let updatedCourse: Course = {
        name: this.courseForm.value.name,
        category: this.courseForm.value.category,
        description: this.courseForm.value.description,
        active: true,
        createdAt: new Date(),
      };

      if (!this.createCourse) {
        updatedCourse = {
          ...updatedCourse,
          createdAt: this.course.createdAt,
          active:
            this.courseForm.value.active == 'true' ||
            this.courseForm.value.active == true,
        };
      }

      this.isEditingEnd.emit(updatedCourse);
    } else {
      console.error('Formulário inválido.');
    }
  }
}
