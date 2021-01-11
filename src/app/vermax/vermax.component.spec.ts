import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VermaxComponent } from './vermax.component';

describe('VermaxComponent', () => {
  let component: VermaxComponent;
  let fixture: ComponentFixture<VermaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VermaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VermaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
