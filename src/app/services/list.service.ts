import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl: string  = 'http://localhost:3000'


  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]>
  {
    return this.http.get<Animal[]>(`${this.apiUrl}/animals`)
  }

  remove(animais: Animal[], animal: Animal)
  {
    return animais.filter((a) => animal.name !== a.name)
  }
}
