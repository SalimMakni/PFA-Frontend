import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAdminPrincipaleComponent } from './espace-admin-principale.component';

describe('EspaceAdminPrincipaleComponent', () => {
  let component: EspaceAdminPrincipaleComponent;
  let fixture: ComponentFixture<EspaceAdminPrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceAdminPrincipaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAdminPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
