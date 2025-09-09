import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-history',
  imports: [CommonModule],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  constructor(
    public dialogRef: MatDialogRef<ChatHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public chat: any[]
  ) {
    console.log('Received chat data:', chat);
  }

  close() {
    this.dialogRef.close();
  }
}
