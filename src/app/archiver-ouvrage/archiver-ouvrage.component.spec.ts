import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiverOuvrageComponent } from './archiver-ouvrage.component';

describe('ArchiverOuvrageComponent', () => {
  let component: ArchiverOuvrageComponent;
  let fixture: ComponentFixture<ArchiverOuvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiverOuvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiverOuvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
