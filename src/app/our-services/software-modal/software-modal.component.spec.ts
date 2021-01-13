import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareModalComponent } from './software-modal.component';

describe('SoftwareModalComponent', () => {
  let component: SoftwareModalComponent;
  let fixture: ComponentFixture<SoftwareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
