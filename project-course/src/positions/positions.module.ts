import { Module } from '@nestjs/common';
import { PositionsController } from './positions.controller';
import { PositionsService } from './positions.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Position} from "./positions.model";

@Module({
  controllers: [PositionsController],
  providers: [PositionsService],
  imports: [
       SequelizeModule.forFeature([Position])
  ],
})
export class PositionsModule {}