import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageEntry } from "../@models/message-entry";

@Injectable({
  providedIn: 'root'})
export class ChatBoardService {

public SendMessage(message: MessageEntry): Observable<MessageEntry> {
  return of({
      id: crypto.randomUUID(), 
      content:this.GenerateRandomMessage().content,
      role: 'assistant',
      createdAt: new Date()
  });
}

public GenerateRandomMessage(): MessageEntry {
  const messages = [
    "How can I assist you today?",
    "What would you like to know?",
    "I'm here to help!",
    "Can you provide more details?",
    "Let's solve your problem together."
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return {
    id: crypto.randomUUID(),
    content: messages[randomIndex],
    role: 'assistant',
    createdAt: new Date()
  };
}



}