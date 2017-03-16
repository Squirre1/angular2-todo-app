import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateTaskForm } from './create-task-form.component';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule],
    exports: [CreateTaskForm],
    declarations: [CreateTaskForm],
    providers: [],
})
export class CreateTaskFormModule {}
