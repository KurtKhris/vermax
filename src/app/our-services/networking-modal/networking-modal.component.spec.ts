import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingModalComponent } from './networking-modal.component';

describe('NetworkingModalComponent', () => {
  let component: NetworkingModalComponent;
  let fixture: ComponentFixture<NetworkingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
