import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsModalComponentComponent } from './task-details-modal.component.component';

describe('TaskDetailsModalComponentComponent', () => {
  let component: TaskDetailsModalComponentComponent;
  let fixture: ComponentFixture<TaskDetailsModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
