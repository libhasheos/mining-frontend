import { Expense } from "./Expense";
import * as ActionTypes from '../src/actions/expense/constants'
// 2 create action types

export interface SetExpenseAction {
  type: typeof ActionTypes.SET_EXPENSES;
  expenses: Expense[];
}
export interface EditExpenseAction {
  type: typeof ActionTypes.EDIT_EXPENSE;
  expense: Expense;
}
export interface RemoveExpenseAction {
  type: typeof ActionTypes.REMOVE_EXPENSE;
  id: string;
}

export interface AddExpenseAction {
  type: typeof ActionTypes.ADD_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes = SetExpenseAction | EditExpenseAction |RemoveExpenseAction | AddExpenseAction;
export type AppAction = ExpenseActionTypes;