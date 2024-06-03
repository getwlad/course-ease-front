import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private endpoint = 'course';

  constructor(private apiService: ApiService) {}

  // GET all courses
  getCourses(): Observable<Course[]> {
    return this.apiService.get<Course[]>(this.endpoint);
  }

  // GET course by ID
  getCourseById(id: number): Observable<Course> {
    return this.apiService.get<Course>(`${this.endpoint}/${id}`);
  }

  // POST new course
  createCourse(course: Course): Observable<Course> {
    return this.apiService.create<Course>(this.endpoint, course);
  }

  // PUT update course
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.apiService.update<Course>(`${this.endpoint}/${id}`, course);
  }

  // DELETE course
  deleteCourse(id: number): Observable<Course> {
    return this.apiService.delete<Course>(`${this.endpoint}/${id}`);
  }

  removeStudents(id: number, removeStudentsIds: number[]): Observable<any> {
    return this.apiService.create<any>(
      `${this.endpoint}/${id}/student/remove`,
      { studentIds: removeStudentsIds },
    );
  }
  addStudents(id: number, addStudentsIds: number[]): Observable<any> {
    return this.apiService.create<any>(`${this.endpoint}/${id}/student`, {
      studentIds: addStudentsIds,
    });
  }
}
