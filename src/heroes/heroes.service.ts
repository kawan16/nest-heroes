import { Injectable, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hero } from './heroes.entity';
import { CreateHeroDTO, HeroDTO, UpdateHeroDTO } from './heroes.dto';
import { Repository } from 'typeorm';

/**
 * Business service related to heroes
 */
@Injectable()
export class HeroesService {

    constructor(
        @InjectRepository(Hero) 
        private readonly repository: Repository<Hero> ) {}


    /** Create a hero */
    create(hero: CreateHeroDTO): Promise<HeroDTO> {
        return this.repository.save(hero);
    }

    /** Returns the hero with the given identifier */
    read(id: string): Promise<HeroDTO> {
        return this.repository.findOne(id);
    }

    /** Update the given hero */
    update(hero: UpdateHeroDTO): Promise<HeroDTO>  {
        return this.repository.save(hero);
    }
  
    /** Delete the hero with given identifier */
    delete(id:string): Promise<any> {
       return this.repository.delete(id);
    }

    /** Retrieve the list of heroes */
    findAll(): Promise<HeroDTO[]>{
      return this.repository.find();
    }
}
