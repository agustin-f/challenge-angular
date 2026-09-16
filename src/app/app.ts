import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LargeCard } from '../components/large-card/large-card';

@Component({
  selector: 'app-root',
  imports: [LargeCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('challenge-angular');
}
