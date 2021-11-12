import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent implements OnInit {

  task: Tasks = new Tasks();
  id: number = 0;
  constructor(private service: TaskService, private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];

    this.service.getTaskbyid(this.id).subscribe((data) => {
      console.log(data);
      this.task = data;
    }, error => {
      console.log(error);
    })

  }

  gotoproject()
  {
      this.router.navigate(['/project-list']);
  }

  onSubmit() {
    this.service.updateTask(this.task,this.id).subscribe(data => {
      console.log(data);
      this.gotoproject();
    
    }, error => {
      console.log(error);
    })
  }
}


