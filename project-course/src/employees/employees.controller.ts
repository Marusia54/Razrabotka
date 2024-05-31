import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {EmployeesService} from "./employees.service";
import {Employee} from "./employees.model";
import {CreateEmployeeDto} from "./dto/create-employees.dto";

@ApiTags('Сотрудники')
@Controller('employees')
export class EmployeesController {
    constructor(private employeesService: EmployeesService) {}

    @ApiOperation({summary: 'Создание сотрудника'})
    @ApiResponse({status: 200, type: Employee})
    @Post()
    create(@Body() employeeDto: CreateEmployeeDto) {
        return this.employeesService.createEmployee(employeeDto);
    }

    @ApiOperation({summary: 'Получение всех сотрудников'})
    @ApiResponse({status: 200, type: [Employee]})
    @Get()
    getAll() {
        return this.employeesService.getAllEmployees();
    }
}