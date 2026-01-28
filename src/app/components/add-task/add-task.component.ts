import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title = '';

  constructor(private taskService: TaskService) {}

  addTask(form: any) {
    if (form.valid) {
      this.taskService.addTask(this.title);
      this.title = '';
      form.resetForm();
    }
  }
}
