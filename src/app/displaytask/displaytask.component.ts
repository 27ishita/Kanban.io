import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent implements OnInit {

  constructor(private service: TaskService , private route : ActivatedRoute) { }
  toDo : Tasks[] = [];
  doing : Tasks[] = [];
  done :Tasks[] = [];
  task : Tasks = new Tasks();
 // id : number = 0;


  ngOnInit(): void {
  this.displayAllProjects()
   //this.getKanban();
  }

  displayAllProjects()
  {
    this.service.getAllTasks().subscribe(data=>{
      data.forEach(t=>{
        this.toDo.push(t);
      })
    })
  }
  drop(event: CdkDragDrop<Tasks[]>) {
   if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
     // this.updateStatusAfterDrag(event);
     transferArrayItem(event.previousContainer.data,
                     event.container.data,
                     event.previousIndex,
                      event.currentIndex);
    }
  }

 /* private getKanban():void {

    const id = this.route.snapshot.params['id'];

    this.service.getTaskbyid(id).subscribe((response)=>{
      this.task = response;
      this.getTaskByStatus(response)
    })

    
  }


 private getTaskByStatus(task:Tasks):void{

   if(task.status='todo')
   this.toDo.push(task);
   else if(task.status='doing')
   this.doing.push(task);
   else
  
   this.done.push(task);
  }
/*
  private updateTaskStatus(task:Tasks,containerId:string)
  {
    if (containerId === 'todolist'){
      task.status = 'todo'
    } else if (containerId === 'doinglist'){
      task.status = 'doing'
    } else {
      task.status = 'done'
    }

    this.service.updateTask(task,task.project_id).subscribe();
  }

  private updateStatusAfterDrag(event: CdkDragDrop<Tasks[]>):void{
    let taskid:number = parseInt(event.item.element.nativeElement.id);
    let containerId = event.container.id;
    console.log(taskid);


    this.service.getTaskbyid(taskid).subscribe(
      response => {
        this.updateTaskStatus(response,containerId);
        console.log(taskid)
      }
    );
  }

*/

}
