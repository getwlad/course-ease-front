import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListPage } from './course-list-page.component';

describe('CourseListPage', () => {
  let component: CourseListPage;
  let fixture: ComponentFixture<CourseListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
