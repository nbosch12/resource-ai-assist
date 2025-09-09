import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { MessageEntry } from "../@models/message-entry";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'})
export class ChatBoardService {
 constructor(private http: HttpClient) {}
 
 public SendMessage(message: MessageEntry): Observable<MessageEntry> {
  const content= message.content.trim();
 
   if (/^(hii|hi|hello)$/i.test(content)) {
    return of({
      id: crypto.randomUUID(),
      content: 'Hello how may I help you?',
      role: 'assistant',
      createdAt: new Date(),
      isTable: false
    } as MessageEntry);
  }

    const apiUrl = `https://resource-ai-assist-be.cfapps.eu10-004.hana.ondemand.com/api/ask?q=${encodeURIComponent(message.content)}`;
    const wantsTable = /table|tabular|as a table/i.test(message.content);
    if (wantsTable) {
     return this.http.get<{ answer: string }>(apiUrl).pipe(
    map(res => {
      // Check if the answer contains a table (very basic check for <table>)
     // const isTable = res.answer.includes('<table');

     const content = res.answer.replace(/\[Chunk\s*#?\d+\]/g, '').trim();
      return {
        id: crypto.randomUUID(),
        content: content,
        role: 'assistant',
        createdAt: new Date(),
        isTable:true
      } as any; // or extend MessageEntry to include isTable if needed
    })
  );
    }else{
      return this.http.get<{ answer: string }>(apiUrl).pipe(
      map(res => ({
        id: crypto.randomUUID(),
        content: res.answer.replace(/\[Chunk[^\]]*\]/g, '').replace(/\s+/g, ' ').trim(), // assuming API returns { message: "..." }
        role: 'assistant',
        createdAt: new Date(),
        isTable:false
      }))
    );
    }

   
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

saveChat(id: string, subId: string, question: string, answer: string): Observable<any> {
  const chatData = {
    id: id,
    subId: subId,
    question: question,
    answer: answer
  };
  const apiUrl = 'https://your-api-endpoint.com/api/savechat'; // Replace with your actual endpoint
  return this.http.post(apiUrl, chatData);
}


}