import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();  //Task referenced as a generic type <Task[]>
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: any) {
    this.onDeleteTask.emit(task);   //emitting event and must associate event in parent component (tasks)
              //emit method 
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }

  styles = {'color': 'red'}

  constructor() { }

  ngOnInit(): void {
  }

}
