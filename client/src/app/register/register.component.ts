import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ApiComponent } from '../api/api.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent { 
  registrationData = {
    FirstName: '',
    LastName: '',
    Email: '',
    PasswordHash: '',
  };
  registerUser(): void {
    this.ApiComponent.postData(this.registrationData).subscribe(
      (response) => {
        console.log('Успешно отправлено:', response);
      },
      (error) => {
        console.error('Ошибка при отправке данных:', error);
        console.error( this.registrationData);
      }
    );
  
  }
    constructor(private themeService: ThemeService,private ApiComponent: ApiComponent) {}

    get isDarkTheme(): boolean {
        return this.themeService.getIsDarkTheme();
      }
    
      toggleTheme(): void {
        this.themeService.toggleTheme();
      }
}
