import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../models/index';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.html',
    styleUrls: ['todo-item.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() item: Task;
    @Output() itemChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() { }

    onChangeChecked(event: any) {
        this.item.checked = event.currentTarget.checked;
        this.itemChange.emit(this.item);
    }
}