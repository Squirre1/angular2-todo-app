import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Task } from './../../models/index';
import { TasksDataService } from './../../services/index';

@Component({
    moduleId: module.id,
    selector: 'create-task-form',
    templateUrl: 'create-task-form.html',
    styleUrls: ['create-task-form.scss'],
    providers: [TasksDataService],
})
export class CreateTaskForm implements OnInit {
    isSubmitting = false;
    newTaskForm: FormGroup;
    @Output() createTaskEvent: EventEmitter<string> = new EventEmitter();

    constructor(private tasksDataService: TasksDataService, private _fb: FormBuilder) { }

    ngOnInit() {
        this.newTaskForm = new FormGroup({
            title: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            description: new FormControl('', [])
        })
    }

    buttonAddHandler(model: Task, isValid: boolean) {
        this.isSubmitting = true;

        if (this.noTitleErrors) {
            this.tasksDataService
                .createTask(model)
                .subscribe(
                    task => {
                        this.createTaskEvent.emit(task);
                        this.newTaskForm.reset('');
                        this.isSubmitting = false;
                    },
                    errors => {
                        this.isSubmitting = false;
                    }
                );
        }
    }

    get noTitleErrors() {
        return this.newTaskForm.controls["title"].valid ||
                (this.newTaskForm.controls["title"].pristine && !this.isSubmitting);
    }
}