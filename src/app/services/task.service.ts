import { Injectable } from '@angular/core';
import { Task } from '../core/models/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, options);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`
    return this.http.put<Task>(url, task, options);
  }
}
