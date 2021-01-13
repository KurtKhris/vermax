import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyModalComponent } from './consultancy-modal.component';

describe('ConsultancyModalComponent', () => {
  let component: ConsultancyModalComponent;
  let fixture: ComponentFixture<ConsultancyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultancyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultancyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
