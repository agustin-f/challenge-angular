import { Component, signal } from '@angular/core';
import { LargeCard } from '../components/large-card/large-card';
import { DefaultCard } from '../components/default-card/default-card';
import { LucideSearch } from '@lucide/angular';

@Component({
  selector: 'app-root',
  imports: [LucideSearch, LargeCard, DefaultCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('challenge-angular');
}
