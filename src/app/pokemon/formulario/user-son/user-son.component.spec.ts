import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSonComponent } from './user-son.component';

describe('UserSonComponent', () => {
  let component: UserSonComponent;
  let fixture: ComponentFixture<UserSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
