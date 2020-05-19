import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StudentService } from '../../services/student.service';
import { StudentServiceStub } from './students.service.mock';

import { StudentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [{ provide: StudentService, useClass: StudentServiceStub }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "userlist" greater than zero', () => {
    expect(component.userList.length).toBeGreaterThan(0);
  });

  it('should call getUsers() of StudentService on component Init', () => {
    spyOn(component.studentService, 'getUsers').and.callThrough();
    component.ngOnInit();
    expect(component.studentService.getUsers).toHaveBeenCalled();
  });
});
