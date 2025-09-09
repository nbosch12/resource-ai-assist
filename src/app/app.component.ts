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
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatButtonModule, MatIconModule,MatDrawerContainer,MatDrawer,ActiveChatComponent,MatListModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resource-ai-assist';
  helloResponse: string | null = null;
  hanaCheckResponse: string | null = null;
   showHistory = false;
 chatHistory = [
  {
    Id:1,
    contentType:"give me a best only one candidate",
    chat:[  
       {
         subId:1,
         question: 'Hi',
         answer: 'How may i help you?'
       },
       {
        subId:2,
        question: 'give me a best only one candidate in terms of java skills',
        answer: 'based on the provided context, the best candidate in terms of Java skills appears to be Ankit Reddy. The key evidence for this is: : Ankit Reddy has 11 years of experience and is described as a "Highly experienced Full Stack Developer with expertise in Java, Angular, REST APIs, and PL/SQL." He has worked on projects involving Java Spring Boot, RESTful APIs, and Azure DevOps. In contrast, the other candidates have more experience in QA automation and PL/SQL development, but do not have the same level of Java and full-stack web application development experience as Ankit Reddy.'
      }
  ]
  },
  {
    Id:2,
    contentType:"give me a score out of 10",
    chat:[
      {
        subId:1,
         question: 'Hi',
         answer: 'How may i help you?'
      },
      {
      subId:2,
      question: 'give me a score out of 10 for each candidate in terms of java skills only in tabular form',
       answer: `
<p>Based on the provided context, here is a table with the Java skills scores for each candidate:</p>
<table>
<thead>
<tr>
<th>Candidate</th>
<th>Java Skills Score (out of 10)</th>
</tr>
</thead>
<tbody>
<tr><td>Ankit Reddy</td><td>9</td></tr>
<tr><td>Meera Joshi</td><td>7</td></tr>
<tr><td>Rajeev Menon</td><td>6</td></tr>
<tr><td>Priya Iyer</td><td>9</td></tr>
<tr><td>Rahul Sharma</td><td>5</td></tr>
<tr><td>Sneha Raj</td><td>7</td></tr>
<tr><td>Akshatha Bhat</td><td>8</td></tr>
</tbody>
</table>
<p>Explanation:</p>
<ul>
<li>Ankit Reddy:  indicates he has "Highly experienced Full Stack Developer with expertise in Java, Angular, REST APIs, and PL/SQL", giving him a score of 9.</li>
<li>Meera Joshi:  states she has "Strong in Java, Selenium, and testing tools, with minor experience in backend using Node.js", giving her a score of 7.</li>
<li>Rajeev Menon:  shows he has "Languages: Java, Python, basic SQL", indicating a score of 6.</li>
<li>Priya Iyer:  describes her as an "Oracle Certified PL/SQL Developer with 9 years of experience in handling complex database solutions", giving her a score of 9.</li>
<li>Rahul Sharma:  mentions his skills are in "C++, Python, Bash" with no mention of Java, so he receives a score of 5.</li>
<li>Sneha Raj:  focuses on her skills in "Node.js, Express.js, Python" with no specific mention of Java, so she receives a score of 7.</li>
<li>Akshatha Bhat:  lists "Java" as one of her key skills, along with other full-stack technologies, so she receives a score of 8.</li>
</ul>
`
  }
]
    
  },
   {
    Id:3,
    contentType:"List the top 3 Full Stack Developer candidates",
    chat:[
      {
        subId:1,
         question: 'Hi',
         answer: 'How may i help you?'
      },
      {
      subId:2,
      question: 'List the top 3 Full Stack Developer candidates with the highest fitment scores. Provide their name, email ID, contact number, locationin a tabular format',
       answer: `
<p>Based on the provided context, here is the requested information in a tabular format:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Contact Number</th>
<th>Location</th>
</tr>
</thead>
<tbody><tr>
<td>Ankit Reddy</td>
<td><a href="mailto:ankit.reddy.dev@example.com">ankit.reddy.dev@example.com</a></td>
<td>N/A</td>
<td>Bangalore, India</td>
</tr>
<tr>
<td>Sneha Raj</td>
<td><a href="mailto:sneha.raj.fs@example.com">sneha.raj.fs@example.com</a></td>
<td>N/A</td>
<td>Coimbatore, India</td>
</tr>
<tr>
<td>Akshatha Bhat</td>
<td><a href="mailto:AkshathaB1996@gmail.com">AkshathaB1996@gmail.com</a></td>
<td>8765453476</td>
<td>Pune</td>
</tr>
</tbody></table>
<p>The top 3 Full Stack Developer candidates with the highest fitment scores are Ankit Reddy, Sneha Raj, and Akshatha Bhat, based on the information provided in , , and , respectively.</p>
`
    }
    ]
   
  }
 ]

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


 openChatHistory(chat: any) {
    this.dialog.open(ChatHistoryComponent, {
      width: '800px',
      data: chat.chat // Pass only the chat object (question/answer)
    });
  }
  
}