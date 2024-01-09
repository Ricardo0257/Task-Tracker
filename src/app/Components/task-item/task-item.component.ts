import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes,faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})

export class TaskItemComponent {
  @Input() task:Task | undefined;
  faHouse = faHouse;
  }
  