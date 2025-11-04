import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { Person } from '../model/person';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = `${environment.apiUrl}/persons`;

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
