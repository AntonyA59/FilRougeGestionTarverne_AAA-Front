import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePasswordComponent } from './configure-password.component';

describe('ConfigurePasswordComponent', () => {
  let component: ConfigurePasswordComponent;
  let fixture: ComponentFixture<ConfigurePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
