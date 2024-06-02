import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { Course } from 'src/app/models/course.model';
import { StudentMin } from 'src/app/models/student-min.model';
import { Student } from 'src/app/models/student.model';
import { TeacherMin } from 'src/app/models/teacher-min.model';
import { Teacher } from 'src/app/models/teacher.mode';

type acceptedTypes = Course | TeacherMin | StudentMin;

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrls: ['./itens-list.component.scss'],
})
export class ItensListComponent implements OnInit {
  @Input() items: acceptedTypes[] = [];
  @Input() label: string = '';
  searchTerm: string = '';
  constructor(private router: Router) {}
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  filteredItems: acceptedTypes[] = [];

  ngOnInit() {
    this.filteredItems = this.items;
  }

  highlightedItem: any;

  highlightItem(item: any) {
    this.highlightedItem = item;
  }

  resetHighlight() {
    this.highlightedItem = null;
  }

  selectItem(item: Course | TeacherMin | StudentMin) {
    let itemType: string = this.getItemType(item);

    this.router.navigate([`${itemType}/${item.id}`]);
  }
  public getItemType(item: Course | TeacherMin | StudentMin): string {
    if ('enrollment' in item) {
      return 'student';
    } else if ('teacher' in item) {
      return 'course';
    } else if ('specialization' in item) {
      return 'teacher';
    } else {
      return 'error';
    }
  }

  filterItems() {
    this.filteredItems = this.items.filter(
      (item: Course | TeacherMin | StudentMin) =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }
}
