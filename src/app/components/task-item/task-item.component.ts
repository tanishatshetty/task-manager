import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  editedTitle = '';

  constructor(private taskService: TaskService) {}

  toggleDone() {
    this.taskService.toggleDone(this.task.id);
  }

  edit() {
    this.editedTitle = this.task.title;
    this.taskService.startEdit(this.task.id);
  }

  save() {
    this.taskService.saveEdit(this.task.id, this.editedTitle);
  }

  delete() {
    this.taskService.deleteTask(this.task.id);
  }
}
