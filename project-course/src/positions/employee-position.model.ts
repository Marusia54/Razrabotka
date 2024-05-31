import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Employee} from "../employees/employees.model";
import {Position} from "./positions.model";


@Table({tableName: 'employee_position', createdAt: false, updatedAt: false})
export class EmployeePositions extends Model<EmployeePositions>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Position)
    @Column({type: DataType.INTEGER})
    positionId: number;

    @ForeignKey(() => Employee)
    @Column({type: DataType.INTEGER})
    employeeId: number;

}