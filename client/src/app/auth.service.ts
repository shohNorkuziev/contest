import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInVar = false;

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return this.isLoggedInVar;
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { Email: email, PasswordHash: password };
    return this.http.post<any>('http://localhost:5000/api/Users/login', loginData);
  }

  logout(): void {
    this.isLoggedInVar = false;
  }
}
