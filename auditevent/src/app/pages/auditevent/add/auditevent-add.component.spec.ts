import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditeventAddComponent } from './auditevent-add.component';

describe('AuditeventAddComponent', () => {
  let component: AuditeventAddComponent;
  let fixture: ComponentFixture<AuditeventAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditeventAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditeventAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
