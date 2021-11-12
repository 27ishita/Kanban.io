
import {  OnInit } from '@angular/core';
import { Component, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { TaskService } from '../task.service';
import { Tasks } from '../tasks';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  
})
export class ProjectListComponent implements OnInit {

  TaskList!: Observable<Tasks[]>; 
  AllTasks : Tasks[] = [];
  newTask : Tasks = new Tasks();
 
  page = 1;
  itemsPerPage = 2;
  pageSize= 10;
  


  constructor(private service: TaskService ,private route : Router) { 
    
  }


  ngOnInit(): void {
    this.displayAllProjects()
  
  }
  displayAllProjects()
  {
    this.service.getAllTasks().subscribe(data=>{
      this.AllTasks = data
    })
  }

  AddTask()
  {
    this.service.createTask(this.newTask).subscribe((data)=>{
      console.log(data);
    })
  }

  onSubmit()
  {
    this.AddTask();
  }

 deleteProject(id:number)
 {
    this.service.deleteTask(id).subscribe(data=>{
      console.log(data);
     this.displayAllProjects();

    })
 }

 updateProject(id:Number)
 {
   this.route.navigate(['update-project',id]);
 }





 

}




