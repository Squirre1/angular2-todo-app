import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Task } from './../../models/index';
import { TasksDataService } from './../../services/index';

@Component({
    moduleId: module.id,
    selector: 'todo-actions',
    templateUrl: 'todo-actions.html',
    styleUrls: ['todo-actions.scss'],
    providers: [TasksDataService],
})
export class TasksActions implements OnInit {
    @Input() active: Boolean;
    @Input() activeCheckedToggle: Boolean;
    @Input() allChecked: Boolean;
    @Output() doneTasksEvent: EventEmitter<Task> = new EventEmitter();
    @Output() removeTasksEvent: EventEmitter<Task> = new EventEmitter();
    @Output() toggleTasksEvent: EventEmitter<Task> = new EventEmitter();

    constructor(private tasksDataService: TasksDataService) { }

    ngOnInit() { }

    buttonDoneHandler() {
        this.doneTasksEvent.emit();
    }

    buttonRemoveHandler() {
        this.removeTasksEvent.emit();
    }

    buttonToggleTasksHandler() {
        this.toggleTasksEvent.emit();
    }
}