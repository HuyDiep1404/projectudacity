import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeeController } from './employeee.controller';
import { Employee } from '../employees/entities/employee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee]), CqrsModule],
  controllers: [EmployeeeController]
})

export class EmployeeeModule {}
