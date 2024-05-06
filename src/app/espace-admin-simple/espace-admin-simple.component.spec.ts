import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAdminSimpleComponent } from './espace-admin-simple.component';

describe('EspaceAdminSimpleComponent', () => {
  let component: EspaceAdminSimpleComponent;
  let fixture: ComponentFixture<EspaceAdminSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAdminSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAdminSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
