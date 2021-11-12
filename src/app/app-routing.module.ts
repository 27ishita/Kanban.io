import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { AppComponent } from './app.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';

const routes: Routes = [{path : 'project-list',component:ProjectListComponent},
{path:'add-project',component:AddprojectComponent},
{path:'home',component:HomeComponent},
{path:'display',component:DisplaytaskComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'update-project/:id',component:UpdateprojectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
