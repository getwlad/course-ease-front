import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Student } from '../models/student.model';
import { StudentMin } from '../models/student-min.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private endpoint = 'student';

  constructor(private apiService: ApiService) {}

  // GET all students
  getStudents(): Observable<StudentMin[]> {
    return this.apiService.get<StudentMin[]>(this.endpoint);
  }

  // GET student by ID
  getStudentById(id: number): Observable<Student> {
    return this.apiService.get<Student>(`${this.endpoint}/${id}`);
  }

  // POST new student
  createStudent(student: Student): Observable<Student> {
    return this.apiService.create<Student>(this.endpoint, student);
  }

  // PUT update student
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.apiService.update<Student>(`${this.endpoint}/${id}`, student);
  }

  // DELETE student
  deleteStudent(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}
