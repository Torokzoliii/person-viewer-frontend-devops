import { TestBed } from '@angular/core/testing';
import { App } from './app';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';

describe('App', () => {
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        HttpClientTestingModule,
        CommonModule
      ],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load persons via HTTP and render them in the template', () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    const mockResponse = [
      { id: 1, firstName: 'Kiss', lastName: 'János', age: 28 }
    ];

    component.loadPersons();

    const req = httpMock.expectOne((req) => req.method === 'GET');
    req.flush(mockResponse);

    fixture.detectChanges();

    expect(component.persons.length).toBeGreaterThan(0);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('table')).toBeTruthy();
    expect(compiled.textContent).toContain('Kiss');
  });
});
