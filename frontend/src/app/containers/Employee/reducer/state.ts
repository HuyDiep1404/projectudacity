import { EmployeeAddModel } from '../models/EmployeeAddModel';

export interface EmployeeState {
    isFetching: boolean;
    errorMessage: string;
    employees: EmployeeAddModel[];
  }
