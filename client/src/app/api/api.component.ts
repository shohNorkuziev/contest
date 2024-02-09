import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
@Component({
    selector: 'app-api',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>api works!</p>`,
    styleUrl: './api.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiComponent {
    private apiUrl = 'http://localhost:5000/api';
    constructor(private http: HttpClient) { }
    getSomeData(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}`);
    }
    
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Users/register`, data);
  }
 }
