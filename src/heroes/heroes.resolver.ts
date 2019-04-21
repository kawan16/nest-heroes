import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { HeroDTO, CreateHeroDTO, UpdateHeroDTO } from './heroes.dto';

@Resolver('Heroes')
export class HeroesResolver {

    constructor(private readonly service: HeroesService) {}

    
    @Mutation('create')
    async create(@Args('hero') hero: CreateHeroDTO): Promise<HeroDTO> {
        return this.service.create(hero);
    }

    @Query('hero')
    async read( @Args('id') id: string): Promise<HeroDTO> {
        return this.service.read(id);
    }
    
    @Mutation('update')
    async update(@Args('hero') hero: UpdateHeroDTO): Promise<HeroDTO>  {
        return this.service.update(hero);
    }

    @Mutation('delete')
    async delete(@Args('id') id: string) {
        console.log( ' DELETE')
        return this.service.delete(id).then( () => id );
    }

    @Query('heroes')
    async findAll(): Promise<HeroDTO[]>  {
        console.log( ' find all ');
        return this.service.findAll();
    }

    
}
