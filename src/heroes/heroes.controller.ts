import { Controller, Get, Post, Delete, Body, Param, UsePipes, ValidationPipe, Put, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO, HeroDTO, UpdateHeroDTO } from './heroes.dto';

/**
 * Rest APi related to super-heroes
 */
@Controller('heroes')
@UseInterceptors(CacheInterceptor)
export class HeroesController {

    constructor( 
        private readonly service: HeroesService) {}

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
        console.log('SNIFF, NOT CACHED')
        return this.service.findAll();
    }

    
}
