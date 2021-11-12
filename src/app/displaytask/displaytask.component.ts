import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css'],
})
export class DisplaytaskComponent implements OnInit {
  constructor(private service: TaskService, private route: ActivatedRoute) {}
  toDo: Tasks[] = [];
  doing: Tasks[] = [];
  done: Tasks[] = [];
  task: Tasks = new Tasks();

  ngOnInit(): void {
    this.displayAllProjects();
  }

  displayAllProjects() {
    this.service.getAllTasks().subscribe((data) => {
      data.forEach((t) => {
        if (t.status === 'todo') {
          this.toDo.push(t);
        } else if (t.status === 'doing') {
          this.doing.push(t);
        } else {
          this.done.push(t);
        }
      });
    });
  }

  drop(event: CdkDragDrop<Tasks[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const data = event.previousContainer.data[event.previousIndex];

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      switch (event.container.id) {
        case 'todolist':
          data.status = 'todo';
          break;

        case 'donelist':
          data.status = 'done';
          break;

        case 'doinglist':
          data.status = 'doing';
          break;
      }

      this.service.updateTask(data, data.project_id).subscribe(console.log);
    }
  }
}
