import { Controller, Get, Post, Delete, Body, Param, HttpCode, Header } from '@nestjs/common';
import { create } from 'domain';

/**
 * Rest APi related to super-heroes
 */
@Controller('heroes')
export class HeroesController {

    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(200)
    create(): string {
        return 'New Hero';
    }
    
    @Get(':id')
    read(@Param('id') id: string): string {
        return 'Batman';
    }

    @Post()
    update(@Body() hero: string): string {
        return "Updated Batman"
    }

    @Delete(':id')
    delete() {
        return "Deleted hero"
    }

    @Get()
    findAll(): string[] {
        return [ 'Batman' , 'Superman' ];
    }

    
}
