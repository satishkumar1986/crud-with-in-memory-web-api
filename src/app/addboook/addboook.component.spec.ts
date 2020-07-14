import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddboookComponent } from './addboook.component';

describe('AddboookComponent', () => {
  let component: AddboookComponent;
  let fixture: ComponentFixture<AddboookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddboookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddboookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
