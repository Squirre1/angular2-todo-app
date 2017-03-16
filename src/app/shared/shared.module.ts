import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemModule }  from './todo-item/index';
import { CreateTaskFormModule }  from './create-task-form/index';
import { TasksActionsFormModule }  from './todo-actions/index';

@NgModule({
  imports:      [ CommonModule ],
  exports:      [ TodoItemModule, CreateTaskFormModule, TasksActionsFormModule ],
  declarations: [ ],
  bootstrap:    [ ]
})
export class SharedModule { }
