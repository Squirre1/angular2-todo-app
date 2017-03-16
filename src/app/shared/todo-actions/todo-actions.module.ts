import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksActions } from './todo-actions.component';

@NgModule({
    imports: [FormsModule],
    exports: [TasksActions],
    declarations: [TasksActions],
    providers: [],
})
export class TasksActionsFormModule {}
