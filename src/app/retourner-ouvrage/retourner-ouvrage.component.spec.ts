import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetournerOuvrageComponent } from './retourner-ouvrage.component';

describe('RetournerOuvrageComponent', () => {
  let component: RetournerOuvrageComponent;
  let fixture: ComponentFixture<RetournerOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetournerOuvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetournerOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
