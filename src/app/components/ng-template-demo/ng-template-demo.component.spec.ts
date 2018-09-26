import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateDemoComponent } from './ng-template-demo.component';

describe('NgTemplateDemoComponent', () => {
  let component: NgTemplateDemoComponent;
  let fixture: ComponentFixture<NgTemplateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
