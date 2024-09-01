import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomWearComponent } from './bottom-wear.component';

describe('BottomWearComponent', () => {
  let component: BottomWearComponent;
  let fixture: ComponentFixture<BottomWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomWearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
