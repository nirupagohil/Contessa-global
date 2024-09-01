import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManTshirtComponent } from './man-tshirt.component';

describe('ManTshirtComponent', () => {
  let component: ManTshirtComponent;
  let fixture: ComponentFixture<ManTshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManTshirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
