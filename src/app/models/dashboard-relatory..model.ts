interface course {
  name: string;
  students: number;
}
interface gender {
  male: number;
  female: number;
  others: number;
}
interface people {
  nome: string;
  curso: string | null;
  ativo: boolean;
  createdAt: Date;
}
export class DashboardRelatory {
  totalCourses: number;
  newCourses: number;
  activeCourses: number;
  totalStudents: number;
  activeStudents: number;
  enrolledStudents: number;
  totalTeachers: number;
  activeTeachers: number;
  teachingTeachers: number;
  coursesMostEnrolled: course[];
  totalGender: gender;
  recentlyRegistered: people[];
  constructor(
    totalCourses: number,
    newCourses: number,
    activeCourses: number,
    totalStudents: number,
    activeStudents: number,
    enrolledStudents: number,
    totalTeachers: number,
    activeTeachers: number,
    teachingTeachers: number,
    coursesMostEnrolled: course[],
    totalGender: gender,
    recentlyRegistered: people[],
  ) {
    this.totalCourses = totalCourses;
    this.newCourses = newCourses;
    this.activeCourses = activeCourses;
    this.totalStudents = totalStudents;
    this.activeStudents = activeStudents;
    this.enrolledStudents = enrolledStudents;
    this.totalTeachers = totalTeachers;
    this.activeTeachers = activeTeachers;
    this.teachingTeachers = teachingTeachers;
    this.coursesMostEnrolled = coursesMostEnrolled;
    this.totalGender = totalGender;
    this.recentlyRegistered = recentlyRegistered;
  }
}
