import { Course } from './course.model';
import { Personal } from './personal.model';

export class Teacher {
  id: number | null;
  cpfCnpj: string;
  specialization: string;
  experienceYears: number;
  active: boolean = true;
  personData: Personal;
  createdAt: Date;
  course?: Course | null = null;
  courseId?: number;

  constructor(
    id: number | null,
    cpfCnpj: string,
    specialization: string,
    experienceYears: number,
    active: boolean,
    personData: Personal,
    createdAt: Date,
    course: Course | null,
    courseId?: number,
  ) {
    this.id = id;
    this.cpfCnpj = cpfCnpj;
    this.specialization = specialization;
    this.experienceYears = experienceYears;
    this.personData = personData;
    this.course = course;
    this.createdAt = createdAt;
    this.active = active;
    this.courseId = courseId;
  }
}
