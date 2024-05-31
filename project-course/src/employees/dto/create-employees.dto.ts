import {ApiProperty} from "@nestjs/swagger";

export class CreateEmployeeDto{
    @ApiProperty({example: 'Иванова Арина Ивановна', description: 'ФИО'})
    readonly name: string;

    @ApiProperty({example: '1990-25-01', description: 'Дата рождения'})
    readonly dateOfBirth: string;

    @ApiProperty({example: 'employee@mail.ru', description: 'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example: 'Медсестра', description: 'Должность сотрудника'})
    readonly position: string;

    @ApiProperty({example: 'Хирургия', description: 'Отдел'})
    readonly department: string;
}