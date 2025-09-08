import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawerContainer,MatDrawer} from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { ActiveChatComponent } from './active-chat/active-chat.component';
import { CareerGraphComponent } from './career-graph/career-graph.component';
import { SkillsGraphComponent } from './skills-graph/skills-graph.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatButtonModule, MatIconModule,MatDrawerContainer,MatDrawer,ActiveChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resource-ai-assist';
  helloResponse: string | null = null;
  hanaCheckResponse: string | null = null;
  showFiller=false;
  constructor(private http: HttpClient, private dialog: MatDialog) {}

  callHelloApi() {
    this.http.get('https://resource-ai-assist-be.cfapps.eu10-004.hana.ondemand.com/hello', { responseType: 'text' })
      .subscribe(response => {
        this.helloResponse = response;
      });
  }

  callHanaCheckApi() {
    this.http.get('https://resource-ai-assist-be.cfapps.eu10-004.hana.ondemand.com/api/hana-check', { responseType: 'text' })
      .subscribe(response => {
        this.hanaCheckResponse = response;
      });
  }

    clearResponse() {
    this.helloResponse = null;
    this.hanaCheckResponse = null; // Clear hanaCheckResponse too
  }

  navigateToSkillsGraph()
  {
      this.dialog.open(SkillsGraphComponent, {
        width: '800px',
        disableClose: false
      });
    
  }
  navigateToCareerGraph()
  {
    this.dialog.open(CareerGraphComponent, {
        width: '800px',
        disableClose: false
      });
    
  }

  uploadFile()
  {
     this.dialog.open(UploadFileComponent, {
        width: '800px',
        disableClose: false
      });
  }

}