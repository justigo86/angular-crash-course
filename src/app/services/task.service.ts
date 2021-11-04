import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }    //can use this.http for http methods (get, post, update, delete)

  getTasks(): Observable<Task[]> {    //observable linked to subscribe in tasks.components.ts
    return this.http.get<Task[]>(this.apiUrl)   //pulls data from backend using get request
  }
}
