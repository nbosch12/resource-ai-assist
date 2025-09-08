import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactionButtonComponent } from './user-reaction-button.component';

describe('UserReactionButtonComponent', () => {
  let component: UserReactionButtonComponent;
  let fixture: ComponentFixture<UserReactionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReactionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
