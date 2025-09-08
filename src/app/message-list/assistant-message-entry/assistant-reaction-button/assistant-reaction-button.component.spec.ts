import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantReactionButtonComponent } from './assistant-reaction-button.component';

describe('AssistantReactionButtonComponent', () => {
  let component: AssistantReactionButtonComponent;
  let fixture: ComponentFixture<AssistantReactionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantReactionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantReactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
