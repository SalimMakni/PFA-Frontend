import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterouvrageComponent } from './consulterouvrage.component';

describe('ConsulterouvrageComponent', () => {
  let component: ConsulterouvrageComponent;
  let fixture: ComponentFixture<ConsulterouvrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterouvrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterouvrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
