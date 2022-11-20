import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureProfileComponent } from './configure-profile.component';

describe('ConfigureProfileComponent', () => {
  let component: ConfigureProfileComponent;
  let fixture: ComponentFixture<ConfigureProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
