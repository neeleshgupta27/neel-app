import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatePickerDemoComponent } from './mat-date-picker-demo.component';

describe('MatDatePickerDemoComponent', () => {
  let component: MatDatePickerDemoComponent;
  let fixture: ComponentFixture<MatDatePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDatePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDatePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
