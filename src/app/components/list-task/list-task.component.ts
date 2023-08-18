import { Component } from '@angular/core';
import { Task } from 'src/app/modules/task';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        console.log(tasks);
        
        this.tasks = tasks;
      },
      error: (error) => {
        console.error('Error fetching tasks:', error);
      }
    });
  }
}
