export class StudentMin {
  id: number | null;
  enrollment: string;
  name: string;
  active: boolean;
  createdAt: Date;
  constructor(
    id: number,
    enrollment: string,
    name: string,
    active: boolean,
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.enrollment = enrollment;
    this.active = active;
    this.createdAt = createdAt;
  }
}
