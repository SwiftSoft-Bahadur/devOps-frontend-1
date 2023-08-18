import { Injectable } from '@angular/core';
import { Task } from '../modules/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3030';
  constructor(private http:HttpClient) { }

  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/api/list`);
  }

  
}
