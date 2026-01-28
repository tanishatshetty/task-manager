import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({
      id: Date.now(),
      title,
      status: 'pending'
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleStatus(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = task.status === 'pending' ? 'completed' : 'pending';
    }
  }
}
