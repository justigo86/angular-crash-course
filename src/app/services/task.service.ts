import { Injectable } from '@angular/core';
// import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }    //can use this.http for http methods (get, post, update, delete)

  getTasks(): Observable<Task[]> {    //observable linked to subscribe in tasks.components.ts
                        //Task referenced as a generic type <Task[]>
    return this.http.get<Task[]>(this.apiUrl)   //pulls data from backend using get request
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;  //url is the localhost with task id
    return this.http.delete<Task>(url);     //http method delete to remove url interface type Task
      //returns an Observable - needs subscribe
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
      //put request of interface type Task - params: (endpoint URL, resources to add/update, HTTP options)
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
