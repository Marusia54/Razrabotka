import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {EmployeePositions} from "../positions/employee-position.model";
import {User} from "../users/users.model";
import {Position} from "../positions/positions.model";

interface EmployeeCreationAttrs{
    name: string;
    dateOfBirth: string;
    email: string;
    position: string;
    department: string;
}
@Table({tableName: 'employees'})
export class Employee extends Model<Employee, EmployeeCreationAttrs>{
    @ApiProperty({example: '1', description: 'Табельный номер'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Иванова Арина Ивановна', description: 'ФИО'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: '1990-25-01', description: 'Дата рождения'})
    @Column({type: DataType.STRING, allowNull: false})
    dateOfBirth: string;

    @ApiProperty({example: 'employee@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'Медсестра', description: 'Должность сотрудника'})
    @Column({type: DataType.STRING, allowNull: false})
    position: string;

    @ApiProperty({example: 'Хирургия', description: 'Отдел'})
    @Column({type: DataType.STRING, allowNull: false})
    department: string;

    @BelongsToMany(() => Position, () => EmployeePositions)
    positions: Position[];
}