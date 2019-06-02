import { TableViewRoutingModule } from './table-view-routing.module';
import { TableViewComponent } from './table-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule,
    TableViewRoutingModule
  ]
})
export class TableViewModule { }
