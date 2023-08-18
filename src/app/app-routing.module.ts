import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: 'list', component: ListTaskComponent },
  { path: 'add-task', component: AddTaskComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
