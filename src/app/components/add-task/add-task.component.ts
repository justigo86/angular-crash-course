import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;            //needs binding to the user input
  day!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task.');    //form validation to ensure user entry before submit
      return;
    }

    const newTask = {     //object intended to submit to the server (service) - through parent
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);   //for newTask (type Task), must import Task

    //clear form onSubmit
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
