import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTasks();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  toggleTask(id: number) {
    this.taskService.toggleStatus(id);
  }
}

