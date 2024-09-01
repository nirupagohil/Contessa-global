import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoungeWearComponent } from './lounge-wear.component';

describe('LoungeWearComponent', () => {
  let component: LoungeWearComponent;
  let fixture: ComponentFixture<LoungeWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoungeWearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoungeWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
