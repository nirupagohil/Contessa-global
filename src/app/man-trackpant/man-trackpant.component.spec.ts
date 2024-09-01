import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManTrackpantComponent } from './man-trackpant.component';

describe('ManTrackpantComponent', () => {
  let component: ManTrackpantComponent;
  let fixture: ComponentFixture<ManTrackpantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManTrackpantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManTrackpantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
