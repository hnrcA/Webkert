import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditeventListComponent } from './auditevent-list.component';

describe('AuditeventListComponent', () => {
  let component: AuditeventListComponent;
  let fixture: ComponentFixture<AuditeventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditeventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditeventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
