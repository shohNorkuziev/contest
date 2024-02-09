import { Component,OnInit } from '@angular/core';
import { ApiComponent } from '../api/api.component';
import { CommonModule } from '@angular/common'; 
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  data: any;

  constructor(private ApiComponent: ApiComponent, private themeService: ThemeService) { }

  ngOnInit() {
    this.ApiComponent.getSomeData().subscribe(
      (data) => {
        this.data = data;
        console.log('Данные получены:', this.data);
      },
      (error) => {
        console.error('Ошибка при получении данных:', error);
      }
    );
  }
  get isDarkTheme(): boolean {
    return this.themeService.getIsDarkTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
