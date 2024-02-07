// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
  { 'path': '', component: MainComponent },
  { 'path': 'profile', component: ProfileComponent },
  { 'path': 'tasks', component: TasksComponent },
  { 'path': 'settings', component: SettingsComponent },
  { 'path': '', redirectTo: '/main', pathMatch: 'full' },
  { 'path': '**', redirectTo: '/main' },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {

// }
// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes, withDebugTracing())]
// }
