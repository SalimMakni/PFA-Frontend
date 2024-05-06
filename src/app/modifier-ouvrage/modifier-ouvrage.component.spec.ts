import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierOuvrageComponent } from './modifier-ouvrage.component';

describe('ModifierOuvrageComponent', () => {
  let component: ModifierOuvrageComponent;
  let fixture: ComponentFixture<ModifierOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierOuvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
