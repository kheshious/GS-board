import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'board', component: BoardComponent},
  {path: 'done-tasks', component: CompletedTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
