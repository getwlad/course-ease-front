import { StudentMin } from './student-min.model';
import { Teacher } from './teacher.mode';
export class Course {
  id?: number;
  name: string;
  category: string;
  active: boolean;
  description: string;
  createdAt: Date;
  teacher?: Teacher | string;
  students?: StudentMin[] = [];
  constructor(
    id: number,
    name: string,
    category: string,
    active: boolean,
    description: string,
    teacher: Teacher | string,
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
