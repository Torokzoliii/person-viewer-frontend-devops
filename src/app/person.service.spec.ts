import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService],
    });

    service = TestBed.inject(PersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call API and get back the correct response', () => {
    const mockResponse = [
      { id: 1, firstName: 'Kiss', lastName: 'János', age: 28 },
      { id: 2, firstName: 'Nagy', lastName: 'Anna', age: 34 },
    ];

    service.getPersons().subscribe((persons) => {
      expect(persons.length).toBe(2);
      expect(persons[0].firstName).toBe('Kiss');
      expect(persons[1].lastName).toBe('Anna');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/persons');
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
