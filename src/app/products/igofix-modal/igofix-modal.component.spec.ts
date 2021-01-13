import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgofixModalComponent } from './igofix-modal.component';

describe('IgofixModalComponent', () => {
  let component: IgofixModalComponent;
  let fixture: ComponentFixture<IgofixModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgofixModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgofixModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
