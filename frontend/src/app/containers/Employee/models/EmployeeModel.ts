export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum SalaryType {
  HOURLY = 'hourly',
  YEARLY = 'yearly',
}

export interface EmployeeModel {
  firstname: string;
  middlename: string;
  lastname: string;
  secondLastName: string;
  displayname: string;
  companyemail: string;
  personalemail: string;
  birthdate: Date;
  startdate: Date;
  phoneNumber: string;
  address: string;
  bankName: string;
  accountNumber: string;
  gender: Gender;
  tags: any;
  country: string;
  region: string;
  city: string;
  salary: number;
  salaryType: SalaryType;
  effectiveDate: Date;
  isActive: boolean;
}

export interface EmployeeRowModel {
  id: number;
  lastName: string;
  secondLastName: string;
  displayName: string;
  email: string;
  birthdate: string;
  startDate: string;
  tags: string;
}

export interface EmployeeUpdateAddressModel {
  address: string;
  country: string;
  region: string;
  city: string;
}

export interface EmployeeUpdateNamesModel {
  firstName: string;
  middleName: string;
  lastName: string;
  secondLastName: string;
}

export interface EmployeeUpdateStringFieldModel {value: string;}
export interface EmployeeUpdateDateFieldModel {value: Date;}
export interface EmployeeUpdateNumberFieldModel {value: number;}
export interface EmployeeUpdateSalaryTypeModel {salaryType: SalaryType;}

export namespace EmployeeModel {
  export const dateFormat = 'M/D/YYYY';
}
