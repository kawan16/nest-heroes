import { Controller, Get, Post, Delete, Body, Param, HttpCode, Header, SetMetadata, HttpException, HttpStatus, UseFilters, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO, HeroDTO, UpdateHeroDTO } from './heroes.dto';
import { Roles } from 'src/shared/decorator/roles.decorator';

/**
 * Rest APi related to super-heroes
 */
@Controller('heroes')
export class HeroesController {

    constructor(private readonly service: HeroesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() hero: CreateHeroDTO): Promise<HeroDTO> {
        return this.service.create(hero);
    }
    
    
    @Get(':id')
    async read(@Param('id') id: string): Promise<HeroDTO> {
        return this.service.read(id);
    }

    @Put()
    async update(@Body() hero: UpdateHeroDTO): Promise<HeroDTO>  {
        return this.service.update(hero);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

    @Get()
    async findAll(): Promise<HeroDTO[]>  {
        return this.service.findAll();
    }

    
}
