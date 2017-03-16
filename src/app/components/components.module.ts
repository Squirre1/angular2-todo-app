import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCardModule }  from './task-card/index';
import { TasksListModule }  from './tasks-list/index';

@NgModule({
  imports:      [ CommonModule ],
  exports:      [ TaskCardModule, TasksListModule ],
  declarations: [ ],
  bootstrap:    [ ]
})
export class ComponentsModule { }
