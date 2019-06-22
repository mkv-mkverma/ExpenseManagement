import { Component, OnInit } from '@angular/core';
import { ExpensedataService } from './../../utils/services/expensedata.service';
import { CategoryDataList, ExpenseDataList } from './../../utils/interface/expense.interface';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css']
})
export class ChartViewComponent implements OnInit {

  public pieChartCatogeries: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';
  public pieChartOptions: any = {backgroundColor: [
               '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
            ]};
  expenseDetails: ExpenseDataList;
  constructor(private expensedataService: ExpensedataService) { }

  ngOnInit() {
    this.getExpense();
  }
// events on slice click
public chartClicked(e: any): void {
}

// event on pie chart slice hover
public chartHovered(e: any): void {
}

getExpense() {
  this.expensedataService.getExpnses.subscribe(
    data => {
      this.expenseDetails = data;
      this.setDataForPieChart();
      });
}
  setDataForPieChart() {
    let index = -1;
    this.expenseDetails.forEach((expense) => {
      if (this.pieChartCatogeries.length) {
        index = this.pieChartCatogeries.indexOf(expense.category);
      }
      if (index === -1) {
      this.pieChartCatogeries.push(expense.category);
      this.pieChartData.push(expense.amount);
    } else {
      this.pieChartData[index] += expense.amount;
    }
    });
  }
}
