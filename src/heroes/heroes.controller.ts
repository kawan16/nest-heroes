import { Controller, Get, Post, Delete, Body, Param, HttpCode, Header } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO, Hero, HeroDTO } from './heroes.model';

/**
 * Rest APi related to super-heroes
 */
@Controller('heroes')
export class HeroesController {

    constructor(private readonly service: HeroesService) {}

    @Post()
    create(@Body() hero: CreateHeroDTO): Hero {
        return this.service.create(hero);
    }
    
    @Get(':id')
    read(@Param('id') id: string): Hero {
        return this.service.read(id);
    }

    @Post()
    update(@Body() hero: HeroDTO): Hero {
        return this.service.update(hero);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

    @Get()
    findAll(): Hero[] {
        return this.service.findAll();
    }

    
}
