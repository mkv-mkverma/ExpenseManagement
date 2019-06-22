import { ChartViewRoutingModule } from './chart-view-routing.module';
import { ChartViewComponent } from './chart-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartViewComponent],
  imports: [
    CommonModule,
    ChartViewRoutingModule,
    ChartsModule
  ]
})
export class ChartViewModule { }
