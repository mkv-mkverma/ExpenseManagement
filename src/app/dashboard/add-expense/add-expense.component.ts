import { ExpensedataService } from './../../utils/services/expensedata.service';
import { Component, OnInit } from '@angular/core';
import { CategoryDataList } from './../../utils/interface/expense.interface';

import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  categories: CategoryDataList;
  category: string;
  display = 'none';
  messageError = false;
  expenseForm = this.fb.group({
    id: [1],
    amount: [null, Validators.required],
    date: [null, Validators.required],
    category: ['Bills', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private expensedataService: ExpensedataService
  ) {}

  ngOnInit() {
    this.getCategory();
  }
  getCategory() {
    this.expensedataService.getCategories.subscribe(
      data => (this.categories = data)
    );
  }

  onSubmit() {
    this.expensedataService.setExpnses(this.expenseForm.value);
    this.reset();
  }

  addNewCategory(category: string) {
    if (category != null) {
      this.messageError = false;
      this.expensedataService.setCategories({category});
    } else {
      this.messageError = true;
    }
    this.category = null;
  }

  openModal() {
    this.display = 'block';
 }

 onCloseHandled() {
  this.display = 'none';
}
  public reset() {
    this.expenseForm.reset({
      id: null,
      amount: null,
      date: null,
      category: 'Bills'
    });
  }
}
