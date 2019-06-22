import { AddExpenseRoutingModule } from './add-expense-routing.module';
import { AddExpenseComponent } from './add-expense.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AddExpenseComponent],
  imports: [
    CommonModule,
    AddExpenseRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddExpenseModule { }
