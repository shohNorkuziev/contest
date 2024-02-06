import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    constructor(private themeService: ThemeService) {}

    get isDarkTheme(): boolean {
      return this.themeService.getIsDarkTheme();
    }

    toggleTheme(): void {
      this.themeService.toggleTheme();
    }
  }

