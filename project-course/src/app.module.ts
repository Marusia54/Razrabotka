import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "bluebird";
import { EmployeesModule } from './employees/employees.module';
import { PositionsModule } from './positions/positions.module';
import * as path from "path";
import {Employee} from "./employees/employees.model";
import {Position} from "./positions/positions.model";
import {EmployeePositions} from "./positions/employee-position.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Role, UserRoles, Post, Employee, Position, EmployeePositions],
        autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        EmployeesModule,
        PositionsModule,
    ]
})
export class AppModule{}
