import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CreatePositionDto} from "./dto/create-position.dto";
import {PositionsService} from "./positions.service";

@ApiTags('Должности')
@Controller('positions')
export class PositionsController {
    constructor(private positionsService: PositionsService) {}

    @Post()
    create(@Body() dto: CreatePositionDto){
        return this.positionsService.createPosition(dto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string){
        return this.positionsService.getPositionByValue(value);
    }
}