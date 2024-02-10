  import { CommonModule } from '@angular/common';
  import { ChangeDetectionStrategy, Component } from '@angular/core';
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { AuthService } from '../auth.service';
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
      constructor(private http: HttpClient,private authService:AuthService) { }
      getSomeData(userId: number | null): Observable<any> {
        // Проверяем, что userId и токен не null, прежде чем отправить запрос
        if (userId !== null ) {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getUserId()}`);
    
          // Вам нужно убедиться, что userId правильно передается в запрос
          return this.http.get<any>(`${this.apiUrl}/Tasks/get/`, { headers });
        } else {
          // Обрабатываем случай, когда userId или токен равен null
          return new Observable(); // Или возвращайте другое значение по умолчанию
        }
      }

      
    postData(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/Users/register`, data);
    }
  }
