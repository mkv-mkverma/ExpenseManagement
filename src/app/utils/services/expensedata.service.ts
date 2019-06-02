import { ExpenseData, CategoryData, ExpenseDataList } from './../interface/expense.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExpensedataService {

  categories = [
    {
      category: 'HouseHold'
    },
    {
      category: 'EatingOut'
    },
    {
      category: 'Investments'
    },
    {
      category: 'Grocery'
    },
    {
      category: 'Bills'
    },
    {
      category: 'Transport'
    }
  ];

  expenses: ExpenseDataList = [
    {
      id: 101,
      date: '2019-05-05',
      amount: 200,
      category: 'Bills'
    },
    {
      id: 102,
      date: '2019-05-04',
      amount: 500,
      category: 'EatingOut'
    },
    {
      id: 102,
      date: '2019-05-03',
      amount: 100,
      category: 'Transport'
    },
    {
      id: 103,
      date: '2019-05-02',
      amount: 2500,
      category: 'HouseHold'
    }
  ];

  private CategorySubject = new BehaviorSubject(this.categories);
  private ExpnsesSubject = new BehaviorSubject(this.expenses);

  constructor() { }

  getCategories = this.CategorySubject.asObservable();
  getExpnses = this.ExpnsesSubject.asObservable();

  setCategories(category: CategoryData) {
    this.categories.push(category);
    this.CategorySubject.next(this.categories);
  }

  setExpnses(expenses: ExpenseData) {
    this.expenses.push(expenses);
    this.ExpnsesSubject.next(this.expenses);
  }
}
