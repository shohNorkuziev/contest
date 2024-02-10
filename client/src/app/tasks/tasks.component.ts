// import { Component,OnInit } from '@angular/core';
// import { ApiComponent } from '../api/api.component';
// import { CommonModule } from '@angular/common'; 
// import { ThemeService } from '../theme.service';
// import { AuthService } from '../auth.service';
// @Component({
//   selector: 'app-tasks',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './tasks.component.html',
//   styleUrl: './tasks.component.css'
// })
// export class TasksComponent implements OnInit {
//   data: any;
//   userId: number | null;
//   constructor(private ApiComponent: ApiComponent, private themeService: ThemeService,private authService:AuthService) {
//     this.userId = authService.getUserId();
//    }

//   ngOnInit() {
//     this.ApiComponent.getSomeData(this.userId).subscribe(
//       (data) => {
//         this.data = data;
//         console.log('Данные получены:', this.data);
//       },
//       (error) => {
//         console.error('Ошибка при получении данных:', error);
//       }
//     );
//   }
//   get isDarkTheme(): boolean {
//     return this.themeService.getIsDarkTheme();
//   }

//   toggleTheme(): void {
//     this.themeService.toggleTheme();
//   }
// }






import { Component, VERSION, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-tasks',
    standalone: true,
    imports: [DragDropModule,CommonModule],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit  {
  name = 'Angular Material ' + VERSION.major + ' Kanban board';
  public board: Board = new Board('Test Board', [
    new Column('Ideas', '21', [
      'Some random idea',
      'This is another random idea'
    ]),
    new Column('Research', '32', [
      'Lorem ipsum',
      'foo'
    ])
  ]);

  constructor(){}

  public ngOnInit(): void {
    console.log(this.board);
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
