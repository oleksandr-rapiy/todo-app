import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  faTimes = faTimes as IconProp;
  @Input() task: Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false
  };

  @Output() 
  onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>;
  @Output() 
  onToggleTask: EventEmitter<Task> = new EventEmitter<Task>;

  deleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleTask.emit(task);
  }

}
