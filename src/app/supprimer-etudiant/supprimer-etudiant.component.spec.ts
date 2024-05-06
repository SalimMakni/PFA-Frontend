import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerEtudiantComponent } from './supprimer-etudiant.component';

describe('SupprimerEtudiantComponent', () => {
  let component: SupprimerEtudiantComponent;
  let fixture: ComponentFixture<SupprimerEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
