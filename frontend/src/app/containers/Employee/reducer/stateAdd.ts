import { EmployeeAddModel } from '../models/EmployeeAddModel';

export interface EmployeeAddState {
    isFetching: boolean;
    errorMessage: string;
    employees: EmployeeAddModel[];
  }
