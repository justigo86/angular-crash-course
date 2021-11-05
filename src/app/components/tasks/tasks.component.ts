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

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
        //subscribe to deleteTask Observable to ensure UI updates when db (on server) is changed
            //task deleted, .then (subscribe) the task is removed from UI
        //filter the tasks array to show the remaining tasks that were not deleted
  }
}
