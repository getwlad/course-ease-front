export class TeacherMin {
  id: number | null;
  name: string;
  specialization: string;
  experienceYears: number;
  active: boolean;
  createdAt: Date;
  constructor(
    id: number,
    specialization: string,
    name: string,
    experienceYears: number,
    active: boolean,
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.specialization = specialization;
    this.experienceYears = experienceYears;
    this.active = active;
    this.createdAt = createdAt;
  }
}
