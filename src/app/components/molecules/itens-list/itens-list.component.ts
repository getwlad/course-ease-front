import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
  @Output() update = new EventEmitter<any>();
  @Input() editing: boolean = false;
  @Input() selectedItems: number[] = [];
  @Input() redColor: boolean = false;

  searchTerm: string = '';
  filteredItems: acceptedTypes[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredItems = this.items;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.filteredItems = changes['items'].currentValue;
      this.filterItems();
    }
  }
  highlightedItem: any;

  highlightItem(item: any) {
    this.highlightedItem = item;
  }

  resetHighlight() {
    this.highlightedItem = null;
  }

  selectItem(item: Course | TeacherMin | StudentMin) {
    if (!this.editing) {
      let itemType: string = this.getItemType(item);
      this.router.navigate([`${itemType}/${item.id}`]);
    }
    if (item.id) {
      const index = this.selectedItems.indexOf(item.id);
      if (index === -1) {
        this.selectedItems.push(item.id);
      } else {
        this.selectedItems.splice(index, 1);
      }
    }
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

  isItemSelected(itemId: any) {
    return this.selectedItems.includes(itemId);
  }
}
