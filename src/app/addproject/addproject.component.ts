import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private service: TaskService) { }
  newTask : Tasks = new Tasks();

  ngOnInit(): void {
  }
  
  AddTask()
  {
    this.service.createTask(this.newTask).subscribe((data)=>{
      console.log(data);
    },
    (error)=>console.log(error))
    
  }

  onSubmit()
  {
    this.AddTask();
  }

}
