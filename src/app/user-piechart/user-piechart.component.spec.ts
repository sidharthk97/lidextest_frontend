import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPiechartComponent } from './user-piechart.component';

describe('UserPiechartComponent', () => {
  let component: UserPiechartComponent;
  let fixture: ComponentFixture<UserPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPiechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
