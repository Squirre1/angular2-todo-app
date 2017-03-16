import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskCard, TasksList } from './components/index';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TasksList },
  { path: 'taskCard/:id', component: TaskCard },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
