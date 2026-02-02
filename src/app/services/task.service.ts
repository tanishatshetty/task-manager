import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    this.tasks.push({
      id: Date.now(),
      title,
      completed: false,
      isEditing: false
    });
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleDone(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  startEdit(id: number): void {
    this.tasks.forEach(t => t.isEditing = false);
    const task = this.tasks.find(t => t.id === id);
    if (task) task.isEditing = true;
  }

  saveEdit(id: number, title: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = title;
      task.isEditing = false;
    }
  }
}
