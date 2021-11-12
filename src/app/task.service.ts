import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) {}

  url:string = "http://localhost:8080/kanban/task"

  getTasks():Observable<Tasks>
  {
    return this.http.get<Tasks>(this.url);
  }

  getAllTasks(): Observable<Tasks[]>
  {
    return this.http.get<Tasks[]>(this.url);
  }

  createTask(task:Tasks):Observable<Object>
  {
        return this.http.post(this.url,task);
  }

  deleteTask(id:number):Observable<Object>
  {
      return this.http.delete(`${this.url}/${id}`);
  }

  updateTask(task:Tasks,id:number):Observable<Object>{

    return this.http.put(`${this.url}/${id}`,task);
  }

  getTaskbyid(id:number):Observable<Tasks>{

    return this.http.get<Tasks>(`${this.url}/${id}`);

  }
}
