import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareModalComponent } from './hardware-modal.component';

describe('HardwareModalComponent', () => {
  let component: HardwareModalComponent;
  let fixture: ComponentFixture<HardwareModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
