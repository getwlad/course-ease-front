import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsPageComponent } from './teacher-details-page.component';

describe('TeacherDetailsPageComponent', () => {
  let component: TeacherDetailsPageComponent;
  let fixture: ComponentFixture<TeacherDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
