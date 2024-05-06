import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprunterOuvrageComponent } from './emprunter-ouvrage.component';

describe('EmprunterOuvrageComponent', () => {
  let component: EmprunterOuvrageComponent;
  let fixture: ComponentFixture<EmprunterOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprunterOuvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprunterOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
