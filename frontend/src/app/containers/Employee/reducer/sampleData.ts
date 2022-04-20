import { EmployeeModel, Gender, SalaryType } from '../models';

function generateFakeDate(): Date {
  return new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
}

function genCh(n: number): string{
  return (Math.random() + 1).toString(36).substring(n);
}

const employee: EmployeeModel = {
  firstName: genCh(2),
  middleName: genCh(3),
  lastName: genCh(4),
  secondLastName: genCh(5),
  displayName: genCh(2),
  companyEmail: `${genCh(2)}@gmail.com`,
  personalEmail: `${genCh(0)}@gmail.com`,
  birthdate: generateFakeDate(),
  startdate: generateFakeDate(),
  phoneNumber: '99002563',
  address: genCh(2),
  bankName: genCh(2),
  accountNumber: '001-04541-6446',
  gender: Gender.MALE,
  tags: [genCh(7), genCh(7)],
  country: genCh(5),
  region: genCh(6),
  city: genCh(7),
  salary: 15,
  salaryType: SalaryType.HOURLY,
  effectiveDate: generateFakeDate(),
  isActive: true,
};

const employee2: EmployeeModel = {
  firstName: genCh(2),
  middleName: genCh(3),
  lastName: genCh(4),
  secondLastName: genCh(5),
  displayName: genCh(2),
  companyEmail: `${genCh(2)}@gmail.com`,
  personalEmail: `${genCh(0)}@gmail.com`,
  birthdate: generateFakeDate(),
  startdate: generateFakeDate(),
  phoneNumber: '99002563',
  address: genCh(2),
  bankName: genCh(2),
  accountNumber: '001-04541-6446',
  gender: Gender.MALE,
  tags: [genCh(7), genCh(7)],
  country: genCh(5),
  region: genCh(6),
  city: genCh(7),
  salary: 15,
  salaryType: SalaryType.HOURLY,
  effectiveDate: generateFakeDate(),
  isActive: true,
};

const employee3: EmployeeModel = {
  firstName: genCh(2),
  middleName: genCh(3),
  lastName: genCh(4),
  secondLastName: genCh(5),
  displayName: genCh(2),
  companyEmail: `${genCh(2)}@gmail.com`,
  personalEmail: `${genCh(0)}@gmail.com`,
  birthdate: generateFakeDate(),
  startdate: generateFakeDate(),
  phoneNumber: '99002563',
  address: genCh(2),
  bankName: genCh(2),
  accountNumber: '001-04541-6446',
  gender: Gender.MALE,
  tags: [genCh(7), genCh(7)],
  country: genCh(5),
  region: genCh(6),
  city: genCh(7),
  salary: 15,
  salaryType: SalaryType.HOURLY,
  effectiveDate: generateFakeDate(),
  isActive: true,
};

const employee4: EmployeeModel = {
  firstName: genCh(2),
  middleName: genCh(3),
  lastName: genCh(4),
  secondLastName: genCh(5),
  displayName: genCh(2),
  companyEmail: `${genCh(2)}@gmail.com`,
  personalEmail: `${genCh(0)}@gmail.com`,
  birthdate: generateFakeDate(),
  startdate: generateFakeDate(),
  phoneNumber: '99002563',
  address: genCh(2),
  bankName: genCh(2),
  accountNumber: '001-04541-6446',
  gender: Gender.MALE,
  tags: [genCh(7), genCh(7)],
  country: genCh(5),
  region: genCh(6),
  city: genCh(7),
  salary: 15,
  salaryType: SalaryType.HOURLY,
  effectiveDate: generateFakeDate(),
  isActive: true,
};

export const employeesSampleData: EmployeeModel[] = [
  employee,
  employee2,
  employee3,
  employee4,
];
