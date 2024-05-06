import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverOuvrageComponent } from './reserver-ouvrage.component';

describe('ReserverOuvrageComponent', () => {
  let component: ReserverOuvrageComponent;
  let fixture: ComponentFixture<ReserverOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverOuvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
