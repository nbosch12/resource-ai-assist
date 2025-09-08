import { Component, input } from '@angular/core';
import { MessageEntry } from '../../@models/message-entry';
import { UserReactionButtonComponent } from './user-reaction-button/user-reaction-button.component';


@Component({
  selector: 'app-user-message-entry',
  imports: [UserReactionButtonComponent],
  templateUrl: './user-message-entry.component.html',
  styleUrl: './user-message-entry.component.css'
})
export class UserMessageEntryComponent {
messageEntry = input<MessageEntry>();
}
