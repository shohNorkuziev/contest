import { Component,OnInit } from '@angular/core';
import { ApiComponent } from '../api/api.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  data: any;

  constructor(private ApiComponent: ApiComponent) { }

  ngOnInit() {
    this.ApiComponent.getSomeData().subscribe(
      (data) => {
        // Обработка успешного ответа
        this.data = data;
        console.log('Данные получены:', this.data);
      },
      (error) => {
        // Обработка ошибки
        console.error('Ошибка при получении данных:', error);
      }
    );
  }
}
