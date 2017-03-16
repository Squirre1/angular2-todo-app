import { NgModule } from '@angular/core';

import { TasksList } from './tasks-list.component';

import { SharedModule }  from './../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [SharedModule, BrowserModule],
    exports: [],
    declarations: [TasksList],
    providers: [],
})
export class TasksListModule { }
