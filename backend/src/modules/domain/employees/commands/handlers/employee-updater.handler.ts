import * as moment from 'moment-timezone';
import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployee } from '../update-employee.command';
import { CommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from '../../repositories/employees.repository';
import { SalaryType } from '../../entities/employee.entity';

@CommandHandler(UpdateEmployee)
@Injectable()
export class EmployeeUpdater extends BaseCommandHandler<UpdateEmployee, void> {
  constructor(private readonly employeeRepository: EmployeeRepository) {
    super();
  }
  async handle(command: UpdateEmployee): Promise<void> {
    const {
      employeeId,
      firstName,
      middleName,
      lastName,
      secondLastName,
      displayName,
      companyEmail,
      personalEmail,
      birthdate,
      address,
      phoneNumber,
      tags,
      country,
      region,
      city,
      salary,
      salaryType,
      effectiveDate,
    } = command;

    const employee = await this.employeeRepository.findById(employeeId);

    const salaryTypeKey = Object.keys(SalaryType).find(
      key => SalaryType[key] === salaryType,
    );

    employee.firstname = firstName;
    employee.middlename = middleName;
    employee.lastname = lastName;
    employee.secondlastname = secondLastName;
    employee.displayname = displayName;
    employee.companyemail = companyEmail;
    employee.personalemail = personalEmail;
    employee.birthdate = moment(birthdate)
      .utc()
      .format();
    employee.address = address;
    employee.phonenumber = phoneNumber;
    employee.tags = tags;
    employee.country = country;
    employee.region = region;
    employee.city = city;
    employee.salary = +salary;
    employee.salarytype = SalaryType[salaryTypeKey];
    employee.effectivedate = moment(effectiveDate)
      .utc()
      .format();

    await this.employeeRepository.save(employee);
  }
}
