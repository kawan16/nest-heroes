import { Injectable } from '@nestjs/common';
import { Hero } from './heroes.model';

/**
 * Business service related to heroes
 */
@Injectable()
export class HeroesService {

    /** The list of heroes (Mock) */
    private readonly heroes: Hero[] = [
        {
            name: 'Batman',
            superpowers: ['Gliding', 'Weapon-based Powers'],
            gender: 'M',
            placeBirth: 'Crest Hill (Bristol Township, Gotham City)'
        },
        {
            name: 'superman',
            superpowers: ['Cryokinesis', 'Vision - Heat'],
            gender: 'M',
            placeBirth: 'Krypton'
        }
        
    ];


    /** Create a hero */
    create(hero: Hero): Hero {
        const newHero = { id: 'some id' , ...hero };
        this.heroes.push(newHero);
        return newHero;
    }

    /** Returns the hero with the given identifier */
    read(id: string): Hero {
        return this.heroes[0];
    }

    /** Update the given hero */
    update(hero: Hero): Hero {
        /** Do some update */
        return hero;
    }
  
    /** Delete the hero with given identifier */
    delete(id:string) {
        /** Do some deletion */
    }

    /** Retrieve the list of heroes */
    findAll(): Hero[] {
      return this.heroes;
    }
}
