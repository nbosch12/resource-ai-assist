import { Component, inject, signal } from '@angular/core';
import { ChatInputComponent } from "../chat-input/chat-input.component";
import { MessageListComponent } from "../message-list/message-list.component";
import { single } from 'rxjs';
import { MessageEntry } from '../@models/message-entry';
import { ChatBoardService } from '../@service/chat-board-service';
import { response } from 'express';

@Component({
  selector: 'app-active-chat',
  imports: [ChatInputComponent, MessageListComponent],
  templateUrl: './active-chat.component.html',
  styleUrl: './active-chat.component.css'
})
export class ActiveChatComponent {
   messageEntries = signal<MessageEntry[]>([]);
   private readonly chatService= inject(ChatBoardService);
   public updateMessageEntries(message:MessageEntry):void
   {
    this.messageEntries.update(prev => [...prev, message]);

    this.chatService.SendMessage(message).subscribe((response) => {
      this.messageEntries.update(prev => [...prev, response]);
    });
   }
  }
