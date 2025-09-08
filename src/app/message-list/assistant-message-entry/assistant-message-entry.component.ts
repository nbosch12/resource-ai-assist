import { Component, effect, input, signal, WritableSignal } from '@angular/core';
import { MessageEntry } from '../../@models/message-entry';
import { AssistantReactionButtonComponent } from './assistant-reaction-button/assistant-reaction-button.component';


@Component({
  selector: 'app-assistant-message-entry',
  imports: [AssistantReactionButtonComponent],
  templateUrl: './assistant-message-entry.component.html',
  styleUrl: './assistant-message-entry.component.css'
})
export class AssistantMessageEntryComponent {
messageEntry = input<MessageEntry>();
public displayedContent: WritableSignal<string> = signal('')
public isThinking: WritableSignal<boolean> = signal(false)
private animationTimeOutId:any
private readonly BASE_TYPING_SPEED_MS = 50 //ms per character
private readonly MAX_RANDaOM_DELAY_MS = 100 //ms per character
private readonly MIN_WORDS_PER_CHUNK = 1 //ms before showing the thinking indicator
private readonly MAX_WORDS_PER_CHUNK = 3 //ms before showing the thinking indicator
private readonly THINKING_TEXT = 'Generating...' //ms before showing the thinking indicator
private readonly THINKING_DURATION_MS = 3000 //ms before showing the thinking indicator

constructor() {
effect(() => {
const currentMessage = this.messageEntry();
this.clearAllAnimation();
if(currentMessage?.content){
  this.isThinking.set(true);
  this.displayedContent.set(this.THINKING_TEXT);
  this.animationTimeOutId = setTimeout(() => {
    this.isThinking.set(false);
     this.displayedContent.set('');
     if(currentMessage?.content){
    this.typeMessageReadOnly(currentMessage.content);
  }
}, this.THINKING_DURATION_MS);
}else{
  this.displayedContent.set('');
  this.isThinking.set(false);
}
});
}

private typeMessageReadOnly(fullContent:string):void
{
  const words = fullContent.split(/(\s+)/);
  let currentIndex = 0;
  const typeNextChunk = () => {
    if (currentIndex < words.length) {

       const wordsInChunk = Math.floor(
        Math.random() * 
        (this.MAX_WORDS_PER_CHUNK - this.MIN_WORDS_PER_CHUNK + 1)) 
        + this.MIN_WORDS_PER_CHUNK;
        let chunk='';
        let wordsAdded=0;
        while(wordsAdded<wordsInChunk && currentIndex < words.length){
          chunk += words[currentIndex];
          if(words[currentIndex].trim().length>0){
            wordsAdded++;
          }
          currentIndex++;
        }
        this.displayedContent.update((content=> content + chunk));
        if(currentIndex < words.length){
          const randomDelay = this.BASE_TYPING_SPEED_MS * 
          chunk.length + Math.random() * this.MAX_RANDaOM_DELAY_MS;
          this.animationTimeOutId = setTimeout(typeNextChunk, randomDelay);
        }else{
          this.displayedContent.set(fullContent);
        }
    }else{
      this.displayedContent.set(fullContent); }
  };
  typeNextChunk();
}

private clearAllAnimation():void{
  if(this.animationTimeOutId){
    clearTimeout(this.animationTimeOutId);
    this.animationTimeOutId = null;
  }
}
}
