import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksDataService, ApiService, JwtService } from './../../services/index';
import { Task } from './../../models/index';

@Component({
    moduleId: module.id,
    selector: 'tasks-list',
    templateUrl: 'tasks-list.html',
    styleUrls: ['tasks-list.scss'],
    providers: [TasksDataService, ApiService, JwtService],
})
export class TasksList implements OnInit {
    constructor(private tasksDataService: TasksDataService, private router: Router) { }

    ngOnInit() { }

    pushTask(task: Task) {
        this.tasksDataService.pushTask(task);
    }

    removeTasks() {
        this.tasksDataService.removeTasks();
    }

    doneTasks() {
        this.tasksDataService.doneTasks();
    }

    toggleTasks() {
        this.tasksDataService.toggleTasks();
    }

    gotoTaskCard(event: any, taskId: string) {
        if (event.target.localName !== 'input') this.router.navigate(['/taskCard', taskId]);
    }

    get tasks() {
        return this.tasksDataService.getTasks();
    }

    get activeCheckedToggle() {
        return this.tasksDataService.getNotDoneTasks().length !== 0;
    }

    get allChecked() {
        return this.tasksDataService.getAllChecked();
    }

    get checkedTasks() {
        return this.tasksDataService.getCheckedTasks();
    }
}