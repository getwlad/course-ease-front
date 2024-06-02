import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-details-card',
  templateUrl: './course-details-card.component.html',
  styleUrls: ['./course-details-card.component.scss'],
})
export class CourseDetailsCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() isEditing: boolean = false;
  @Output() courseChange = new EventEmitter<Course>();
  @Output() isEditingChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  toggleEditing() {
    this.isEditing = !this.isEditing;
    this.isEditingChange.emit(this.isEditing);
  }
  deletecourse() {
    if (confirm('Tem certeza de que deseja desativar este estudante?')) {
      //this.courseService.deletecourse(this.courseId).subscribe(() => {});
      this.course.active = false;
    }
  }
}
