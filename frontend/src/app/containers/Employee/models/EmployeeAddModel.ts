export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
  }
  
export enum SalaryType {
    HOURLY = 'hourly',
    YEARLY = 'yearly',
  }
export interface EmployeeAddModel {
    firstName: string;
    middleName: string;
    lastName: string;
    secondLastName: string;
    displayName: string;
    companyEmail: string;
    personalEmail: string;
    birthdate: Date;
    startDate: Date;
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
  export namespace EmployeeAddModel {
    export const dateFormat = 'M/D/YYYY';
  }
  