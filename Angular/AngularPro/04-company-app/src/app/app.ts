import { Component, signal } from '@angular/core';
import AdminLayoutComponent from './modules/admin/layouts/admin-layout/admin-layout.component';

@Component({
  selector: 'app-root',
  imports: [AdminLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('company-app');
}
