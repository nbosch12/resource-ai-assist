import { Component, ElementRef, EventEmitter, output, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageEntry } from '../@models/message-entry';

@Component({
  selector: 'app-chat-input',
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLDivElement>;
   public message = output<MessageEntry>();
  sendMessage(): void {
    const messageText = this.messageInput.nativeElement.innerText
    this.message.emit({
      id: crypto.randomUUID(), 
      content: messageText,
      role: 'user',
      createdAt: new Date()
    });
    this.messageInput.nativeElement.innerText = '';
  }
}
