import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEnseignantComponent } from './consulter-enseignant.component';

describe('ConsulterEnseignantComponent', () => {
  let component: ConsulterEnseignantComponent;
  let fixture: ComponentFixture<ConsulterEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
