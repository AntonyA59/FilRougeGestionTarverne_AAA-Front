import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineMapComponent } from './cuisine-map.component';

describe('CuisineMapComponent', () => {
  let component: CuisineMapComponent;
  let fixture: ComponentFixture<CuisineMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisineMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
