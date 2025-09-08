import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-assistant-reaction-button',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './assistant-reaction-button.component.html',
  styleUrl: './assistant-reaction-button.component.css'
})
export class AssistantReactionButtonComponent {
 @Input() message: string = '';
 upActive = false;
  downActive = false;

  thumbsUp() {
    this.upActive = true;
    this.downActive = false;
  }

  thumbsDown() {
    this.downActive = true;
    this.upActive = false;
  }

  copyAll() {
    if (this.message && navigator.clipboard) {
    navigator.clipboard.writeText(this.message)
      .then(() => alert('Message copied!'))
      .catch(() => alert('Failed to copy!'));
  } else {
    alert('Clipboard not supported or message is empty.');
  }
  }
}
