import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Task } from '../../models/index';
import { ApiService } from '../api';

@Injectable()
export class TasksDataService {
    tasks: Task[] = [];

    constructor(private apiService: ApiService) {
        const params = new URLSearchParams();
        params.set('filter', '{"order": "done ASC"}');
        this.fetchTasks(params).subscribe((result) => { this.tasks = result; }); // tslint:disable-line
    }

    getTasks = (): Task[] => this.tasks || [];
    getDoneTasks = (): Task[] => this.tasks.filter(task => task.done) || [];
    getNotDoneTasks = (): Task[] => this.tasks.filter(task => !task.done) || [];
    getAllChecked = (): boolean =>
        this.getCheckedTasks().length === (this.tasks.length - this.getDoneTasks().length)
            && this.getDoneTasks().length !== this.tasks.length
            && this.getCheckedTasks().length !== 0


    pushTask = (task: Task) => {
        let newTasks = this.getTasks();
        const insertIndex = newTasks.findIndex(task => task.done);

        if (insertIndex > -1 ) newTasks = this.tasks.slice(0, insertIndex);
        newTasks.push(task);
        this.tasks = newTasks.concat(this.getDoneTasks());
    }

    fetchTasks(params: URLSearchParams) {
        return this.apiService.get('/tasks/', params)
            .map(data => data);
    }

    createTask(params: Object) {
        return this.apiService.post('/tasks/', params)
            .map(data => data)
    }

    getCheckedTasks = () => {
        const tasksArray = this.getTasks();
        const tasksNotEmpty = tasksArray.length !== 0;
        return tasksNotEmpty ? tasksArray.filter(task => task.checked && !task.done).map(task => task) : [];
    }

    doneTasks() {
        const checkedTasks = this.getCheckedTasks();
        this.apiService.post('/tasks/done', { checkedTasks })
            .map(data => data)
            .subscribe(response => { this.tasks = response.tasks });
    }

    removeTasks() {
        const checkedTasks = this.getCheckedTasks();
        this.apiService.post('/tasks/purge', { checkedTasks })
            .map(data => data)
            .subscribe(response => { this.tasks = response.tasks });
    }

    toggleTasks() {
        const ids = this.getCheckedTasks();
        this.tasks = this.getTasks().map((task, inndex, array) => {
            const newTask = new Task(task);
            if(!task.done) {
                newTask.checked = this.getAllChecked() ? false : true;
            }
            return newTask;
        })
    }
}
