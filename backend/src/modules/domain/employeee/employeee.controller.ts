import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployee } from '../employees/commands/create-employee.command';
import { Employee } from '../employees/entities/employee.entity';
import { CreateEmployeeRequest } from '../employees/requests/create-employee-request.interface';

@Controller('employeee')
export class EmployeeeController {
  constructor(
    @InjectRepository(Employee) private empRepo: Repository<Employee>,
    ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() employeeRequest: CreateEmployeeRequest): Promise<any> {
    //return newPerson;
    try{
      var emp = new Employee(new CreateEmployee(
        employeeRequest.firstName,
        employeeRequest.middleName,
        employeeRequest.lastName,
        employeeRequest.secondLastName,
        employeeRequest.displayName,
        employeeRequest.companyEmail,
        employeeRequest.personalEmail,
        employeeRequest.birthdate,
        employeeRequest.startDate,
        employeeRequest.address,
        employeeRequest.phoneNumber,
        employeeRequest.bankName,
        employeeRequest.accountNumber,
        employeeRequest.gender,
        employeeRequest.tags,
        employeeRequest.country,
        employeeRequest.region,
        employeeRequest.city,
        employeeRequest.salary,
        employeeRequest.effectiveDate,
        employeeRequest.salaryType,
      ));
      await this.empRepo.insert(emp);
    }
    catch(e){
      return e;
    }
  }
}
