import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { HeroDTO, CreateHeroDTO, UpdateHeroDTO } from './heroes.dto';

@Resolver('Heroes')
export class HeroesResolver {

    constructor(private readonly service: HeroesService) {}

    
    @Mutation(returns => HeroDTO)
    create(@Args('hero') hero: CreateHeroDTO): Promise<HeroDTO> {
        return this.service.create(hero) ;
    }

    @Query(returns => [HeroDTO], { name: 'hero' })
    async read( @Args('id') id: string): Promise<HeroDTO> {
        return this.service.read(id);
    }
    
    @Mutation(returns => HeroDTO)
    async update(@Args('hero') hero: UpdateHeroDTO): Promise<HeroDTO>  {
        return this.service.update(hero);
    }

    @Mutation(returns => String)
    async delete(@Args('id') id: string) {
        return this.service.delete(id).then( () => id );
    }

    @Query(returns => [HeroDTO], { name: 'heroes' })
    async findAll(): Promise<HeroDTO[]>  {
        return this.service.findAll();
    }

    
}
