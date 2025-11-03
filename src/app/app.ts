import {Component, signal} from '@angular/core';
import { PersonService } from './person.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NgForOf,
  ],
  styleUrl: './app.css'
})
export class App {
  persons: any[] = [];

  constructor(private personService: PersonService) {}

  loadPersons() {
    this.personService.getPersons().subscribe({
      next: (data) => {
        console.log('Response data:', data);
        this.persons = data;
      },
      error: (err) => console.error('Error fetching persons:', err)
    });
  }
}
