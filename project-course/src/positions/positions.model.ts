import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Employee} from "../employees/employees.model";
import {EmployeePositions} from "./employee-position.model";

interface PositionCreationAttrs{
    value: string;
    description: string;
}
@Table({tableName: 'positions'})
export class Position extends Model<Position, PositionCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Nurse', description: 'Уникальное значение должности'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Медсестра', description: 'Описание должности'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => Employee, () => EmployeePositions)
    employees: Employee[];
}