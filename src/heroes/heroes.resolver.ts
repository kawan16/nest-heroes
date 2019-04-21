import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { HeroDTO, CreateHeroDTO, UpdateHeroDTO } from './heroes.dto';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Resolver('Heroes')
export class HeroesResolver {

    constructor(@Inject('HEROES_SERVICE') private readonly client: ClientProxy) {}

    
    @Mutation(returns => HeroDTO)
    create(@Args('hero') hero: CreateHeroDTO): Promise<HeroDTO> {
        const pattern = {cmd: 'create'};
        return this.client.send<HeroDTO>(pattern, hero).toPromise();
    }

    @Query(returns => [HeroDTO], { name: 'hero' })
    async read( @Args('id') id: string): Promise<HeroDTO> {
        const pattern = {cmd: 'read'};
        return this.client.send<HeroDTO>(pattern, id).toPromise();
    }
    
    @Mutation(returns => HeroDTO)
    async update(@Args('hero') hero: UpdateHeroDTO): Promise<HeroDTO>  {
        const pattern = {cmd: 'update'};
        return this.client.send<HeroDTO>(pattern, hero).toPromise();
    }

    @Mutation(returns => String)
    async delete(@Args('id') id: string) {
        const pattern = {cmd: 'delete'};
        return this.client.send<String>(pattern, id).toPromise();
    }

    @Query(returns => [HeroDTO], { name: 'heroes' })
    async findAll(): Promise<HeroDTO[]>  {
        const pattern = {cmd: 'findall'};
        return this.client.send<HeroDTO[]>(pattern, {}).toPromise();
    }

    
}
