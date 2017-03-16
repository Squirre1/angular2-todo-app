import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoItemComponent } from './todo-item.component';

@NgModule({
    imports: [BrowserModule],
    exports: [TodoItemComponent],
    declarations: [TodoItemComponent],
    providers: [],
})
export class TodoItemModule {}
