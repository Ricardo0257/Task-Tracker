import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe(tasks => this.tasks=tasks);
  }
}
