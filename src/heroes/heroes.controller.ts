import { Controller, Get, Post, Delete, Body, Param, HttpCode, Header, SetMetadata, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO, Hero, HeroDTO } from './heroes.model';
import { Roles } from 'src/shared/decorator/roles.decorator';
import { HttpExceptionFilter } from 'src/shared/filter/http-exception.filter';

/**
 * Rest APi related to super-heroes
 */
@Controller('heroes')
export class HeroesController {

    constructor(private readonly service: HeroesService) {}

    @Post()
    @SetMetadata('roles', ['admin'])
    create(@Body() hero: CreateHeroDTO): Hero {
        return this.service.create(hero);
    }
    
    
    @Get(':id')
    @Roles('Wizard', 'Muggle')
    //@UseFilters(new HttpExceptionFilter())
    read(@Param('id') id: string): Hero {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        //return this.service.read(id);
    }

    @Post()
    @Roles('Wizard', 'Muggle')
    update(@Body() hero: HeroDTO): Hero {
        return this.service.update(hero);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

    @Get()
    @Roles('Wizard', 'Muggle')
    findAll(): Hero[] {
        return this.service.findAll();
    }

    
}
