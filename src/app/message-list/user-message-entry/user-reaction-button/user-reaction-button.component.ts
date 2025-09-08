import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-reaction-button',
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './user-reaction-button.component.html',
  styleUrl: './user-reaction-button.component.css'
})
export class UserReactionButtonComponent {

}
