import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatatableDemoComponent } from './mat-datatable-demo.component';

describe('MatDatatableDemoComponent', () => {
  let component: MatDatatableDemoComponent;
  let fixture: ComponentFixture<MatDatatableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDatatableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDatatableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
