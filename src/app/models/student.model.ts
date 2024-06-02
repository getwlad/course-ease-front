import { Course } from './course.model';
import { Personal } from './personal.model';

export class Student {
  id?: number | null;
  cpf: string;
  enrollment?: string;
  active?: boolean = true;
  createdAt?: Date;
  personData: Personal;
  course?: Course | null = null;

  constructor(
    id: number | null,
    cpf: string,
    enrollment: string,
    active: boolean | true,
    personData: Personal,
    createdAt: Date,
    course: Course,
  ) {
    this.id = id;
    this.cpf = cpf;
    this.enrollment = enrollment;
    this.active = active;
    this.personData = personData;
    this.createdAt = createdAt;
    this.course = course;
  }
}
