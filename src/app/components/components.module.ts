import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';
import { TodoService } from '../shared/todo-service/todo.service';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasksComponent } from './tasks/tasks.component';
import { DateHeaderComponent } from './date-header/date-header.component';

@NgModule({
  declarations: [TasksComponent, AddtaskComponent, DateHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [TasksComponent, AddtaskComponent, DateHeaderComponent],
  providers: [TodoService]
})
export class ComponentsModule { }
