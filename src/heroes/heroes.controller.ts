import { Controller, Inject } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroDTO, CreateHeroDTO, UpdateHeroDTO } from './heroes.dto';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';

@Controller()
export class HeroesController {

    constructor( private readonly service: HeroesService) {}

    
    @MessagePattern({ cmd: 'create' })
    create(hero: CreateHeroDTO): Promise<HeroDTO> {
        return this.service.create(hero) ;
    }

    @MessagePattern({ cmd: 'read' })
    async read(id: string): Promise<HeroDTO> {
        return this.service.read(id);
    }
    
    @MessagePattern({ cmd: 'update' })
    async update(hero: UpdateHeroDTO): Promise<HeroDTO>  {
        return this.service.update(hero);
    }

    @MessagePattern({ cmd: 'delete' })
    async delete(id: string) {
        return this.service.delete(id).then( () => id );
    }

    @MessagePattern({ cmd: 'findall' })
    async findAll(): Promise<HeroDTO[]>  {
        return this.service.findAll();
    }
}
