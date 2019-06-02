/**
 * Interface for data models.
 */
export interface CategoryData {
    category: string;
}

export interface ExpenseData {
    id: number;
    date: string;
    amount: number;
    category: string;
}

export interface ExpenseDataList extends Array<ExpenseData> {}

export interface CategoryDataList extends Array<CategoryData> {}
