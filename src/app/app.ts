import { Component, inject } from '@angular/core';
import { PersonService } from './person.service';
import { NgForOf } from '@angular/common';
import { Person } from '../model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NgForOf,
  ],
  styleUrl: './app.css'
})
export class App {
  persons: Person[] = [];

  private readonly personService = inject(PersonService);

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
