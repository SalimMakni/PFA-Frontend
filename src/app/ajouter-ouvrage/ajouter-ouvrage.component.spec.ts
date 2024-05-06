import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOuvrageComponent } from './ajouter-ouvrage.component';

describe('AjouterOuvrageComponent', () => {
  let component: AjouterOuvrageComponent;
  let fixture: ComponentFixture<AjouterOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterOuvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
