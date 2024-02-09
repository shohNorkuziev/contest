import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { AuthService } from '../auth.service';
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',

})
export class LoginComponent {
  constructor(private themeService: ThemeService,private authService:AuthService) {}

  get isDarkTheme(): boolean {
    return this.themeService.getIsDarkTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  SignData = {
    Email: '',
    PasswordHash: '',
  };

  onSubmit(): void {
    this.authService.login(this.SignData.Email, this.SignData.PasswordHash).subscribe(
      (response) => {
        console.log('Вход выполнен успешно:', response);
      },
      (error) => {
        if (error.status === 400) {
          console.error('Ошибка при входе:', 'Неправильные учетные данные');
        } else {
          console.error('Ошибка при входе:', error);
        }
      }
    );
  }
}