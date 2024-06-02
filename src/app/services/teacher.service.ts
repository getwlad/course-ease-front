import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Teacher } from '../models/teacher.mode';
import { TeacherMin } from '../models/teacher-min.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private endpoint = 'teacher';

  constructor(private apiService: ApiService) {}

  // GET all teachers
  getTeachers(): Observable<TeacherMin[]> {
    return this.apiService.get<TeacherMin[]>(this.endpoint);
  }

  // GET teacher by ID
  getTeacherById(id: number): Observable<Teacher> {
    return this.apiService.get<Teacher>(`${this.endpoint}/${id}`);
  }

  // POST new teacher
  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.apiService.create<Teacher>(this.endpoint, teacher);
  }

  // PUT update teacher
  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.apiService.update<Teacher>(`${this.endpoint}/${id}`, teacher);
  }

  // DELETE teacher
  deleteTeacher(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}
