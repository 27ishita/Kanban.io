import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { HomeComponent } from './home/home.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UpdateprojectComponent } from './updateproject/updateproject.component';




@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    FirstComponent,
    AddprojectComponent,
    HomeComponent,
    DisplaytaskComponent,
    UpdateprojectComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    DragDropModule
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
