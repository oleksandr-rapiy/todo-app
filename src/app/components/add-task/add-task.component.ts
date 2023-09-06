import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/core/models/task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output()
  onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  showForm: boolean = false;
  subscription: Subscription = new Subscription()

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showForm = value;
    });
  }

  onSubmit() {
    if (!this.text || !this.day) {
      alert("Add the task");
      return;
    }

    const task: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
