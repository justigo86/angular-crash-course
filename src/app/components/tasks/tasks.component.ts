import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];    //variable tasks is the Task[] array type that consists of (mock-)TASKS

  displayText = '';
  getData(val: string) {
    this.displayText = val
  }
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe((tasks) => this.tasks = tasks)     //subscribe to observable in task.service.ts
      //similar to a promise that repeatedly checks for updates(/tasks)
  }
}
