import { Component, effect, ElementRef, input, ViewChild } from '@angular/core';
import { UserMessageEntryComponent } from './user-message-entry/user-message-entry.component';
import { AssistantMessageEntryComponent } from './assistant-message-entry/assistant-message-entry.component';
import { MessageEntry } from '../@models/message-entry';

@Component({
  selector: 'app-message-list',
  imports: [UserMessageEntryComponent,AssistantMessageEntryComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messageEntries= input<MessageEntry[]>([]);
  @ViewChild('scrollContainer') private scrollContainer?:ElementRef<HTMLDivElement>;

  constructor() {
    effect(() => {  
      this.scrollToBottom();
      this.messageEntries()

  });

}

ngAfterViewInit():void{
  this.scrollToBottom();{

}
}
private scrollToBottom():void{
  setTimeout(() => {
    if(this.scrollContainer?.nativeElement){
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }, 0);
}

}
  