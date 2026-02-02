import { Component } from '@angular/core';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
