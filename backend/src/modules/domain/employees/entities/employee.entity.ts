import * as moment from 'moment-timezone';
import { AggregateRoot } from '../../../common/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateEmployee } from '../commands/create-employee.command';
import { EmployeeCreated } from '../events/employee-created.event';

@Entity()
export class Employee extends AggregateRoot<number> {
  //change <string> to <number> above to fix the compile error
  constructor(params = {} as CreateEmployee) {
    super();
    if (params) {
      this.accountnumber = params.accountNumber;
      this.address = params.address;
      this.firstname = params.firstName;
      this.gender = getGenderFromEnum(params.gender);
      this.lastname = params.lastName;
      this.middlename = params.middleName;
      this.personalemail = params.personalEmail;
      this.phonenumber = params.phoneNumber;
      this.region = params.region;
      this.salary = +params.salary;
      this.salarytype = getSalaryTypeFromEnum(params.salaryType);
      this.secondlastname = params.secondLastName;
      this.startdate = getDateFromString(params.startDate);
      this.tags = params.tags;
      this.city = params.city;
      this.country = params.country;
      this.displayname = params.displayName;
      this.effectivedate = getDateFromString(params.effectiveDate);
      this.companyemail = params.companyEmail;
      this.bankname = params.bankName;
      this.birthdate = getDateFromString(params.birthdate);
    }

    // this.apply(new EmployeeCreated(this.id, this.firstName));
  }

  @PrimaryGeneratedColumn()
  //change <string> to <number> in line 8 to fix the compile error
  id: number;

  @Column({ length: 100 })
  public firstname: string;

  @Column({ length: 100, nullable: true })
  public middlename: string;

  @Column({ length: 100 })
  public lastname: string;

  @Column({ length: 100, nullable: true })
  public secondlastname: string;

  @Column({ length: 100, nullable: true })
  public displayname: string;

  @Column({ length: 50, default: '' })
  public companyemail: string;

  @Column({ length: 50, nullable: true, default: '' })
  public personalemail: string;

  @Column({ nullable: true })
  public birthdate: Date;

  @Column()
  public startdate: Date;

  @Column({ length: 200, nullable: true })
  public address: string;

  @Column({ length: 100, nullable: true })
  public phonenumber: string;

  @Column({ length: 100, nullable: true })
  public bankname: string;

  @Column({ length: 100, nullable: true })
  public accountnumber: string;

  @Column({ nullable: true })
  public gender: Gender;

  @Column({ type: 'json', default: '{}' })
  public tags: string;

  @Column({ length: 100 })
  public country: string;

  @Column({ length: 100 })
  public region: string;

  @Column({ length: 100 })
  public city: string;

  @Column()
  public effectivedate: Date;

  @Column('decimal')
  public salary: number;

  @Column()
  public salarytype: SalaryType;

  @Column({ default: true })
  public isactive: boolean;

  @Column({ default: 40 })
  public workinghoursperweek: number;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum SalaryType {
  YEARLY = 'yearly',
  HOURLY = 'hourly',
}

export function getDateFromString(date: string): Date {
  return moment(date).format('M/D/YYYY');
}

function getGenderFromEnum(gender: string): Gender {
  return Gender[Object.keys(Gender).find(key => Gender[key] === gender)];
}

function getSalaryTypeFromEnum(salaryType: string): SalaryType {
  return SalaryType[
    Object.keys(SalaryType).find(key => SalaryType[key] === salaryType)
  ];
}
