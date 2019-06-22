import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chart-view',
    pathMatch: 'full'
  },
  {
    path: 'chart-view',
    loadChildren: './dashboard/chart-view/chart-view.module#ChartViewModule'
  },
  {
    path: 'table-view',
    loadChildren: './dashboard/table-view/table-view.module#TableViewModule'
  },
  {
    path: 'add-expense',
    loadChildren: './dashboard/add-expense/add-expense.module#AddExpenseModule'
  },
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

