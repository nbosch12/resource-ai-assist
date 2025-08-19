import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resource-ai-assist';
  helloResponse: string | null = null;
  hanaCheckResponse: string | null = null;

  constructor(private http: HttpClient) {}

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


}