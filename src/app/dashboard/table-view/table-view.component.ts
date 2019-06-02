import { ExpenseDataList } from './../../utils/interface/expense.interface';
import { Component, OnInit } from '@angular/core';
import { ExpensedataService } from './../../utils/services/expensedata.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  expenseDetails: ExpenseDataList;
  constructor(private expensedataService: ExpensedataService) { }

  ngOnInit() {
    this.getExpense();
  }
  getExpense() {
    this.expensedataService.getExpnses.subscribe(
      data => (this.expenseDetails = data)
    );
  }
}
