import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditeventCardComponent } from './auditevent-card.component';

describe('AuditeventCardComponent', () => {
  let component: AuditeventCardComponent;
  let fixture: ComponentFixture<AuditeventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditeventCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditeventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
