import { StudentMin } from './student-min.model';
import { TeacherMin } from './teacher-min.model';

export class Course {
  id?: number;
  name: string;
  category: string;
  active: boolean;
  description: string;
  createdAt: Date;
  teacher?: TeacherMin | string;
  students?: StudentMin[] = [];
  constructor(
    id: number,
    name: string,
    category: string,
    active: boolean,
    description: string,
    teacher: TeacherMin | string,
    students: StudentMin[],
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.active = active;
    this.description = description;
    this.teacher = teacher;
    this.students = students;
    this.createdAt = createdAt;
  }
}
