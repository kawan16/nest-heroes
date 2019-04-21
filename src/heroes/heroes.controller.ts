import { Controller, Get, Post, Delete, Body, Param, UsePipes, ValidationPipe, Put, UseInterceptors, CacheInterceptor, ClassSerializerInterceptor } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO, HeroDTO, UpdateHeroDTO } from './heroes.dto';
import { ApiUseTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

/**
 * Rest APi related to super-heroes
 */
@ApiUseTags('Heroes')
@Controller('heroes')
@UseInterceptors(CacheInterceptor)
@UseInterceptors(ClassSerializerInterceptor)
export class HeroesController {

    constructor( 
        private readonly service: HeroesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({ description: 'The hero has been successfully created.'})
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
    @ApiOkResponse({ description: 'The list of heroes have been found'})
    async findAll(): Promise<HeroDTO[]>  {
        console.log('SNIFF, NOT CACHED')
        return this.service.findAll();
    }

    
}
