import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/items/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<Task>(`${this.apiUrl}`);
  }

  saveItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateTask (task: Task, id: Number): Observable<any> {
    return this,this.http.put<Task>(`${this.apiUrl}${id}`, task);
  }

}
