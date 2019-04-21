
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface CreateHeroDTO {
    name?: string;
    superpowers?: string[];
    gender?: string;
    placeBirth?: string;
}

export interface UpdateHeroDTO {
    id?: string;
    name?: string;
    superpowers?: string[];
    gender?: string;
    placeBirth?: string;
}

export interface HeroDTO {
    id?: string;
    name?: string;
    superpowers?: string[];
    gender?: string;
    placeBirth?: string;
}

export interface IMutation {
    create(hero?: CreateHeroDTO): HeroDTO | Promise<HeroDTO>;
    update(hero?: UpdateHeroDTO): HeroDTO | Promise<HeroDTO>;
    delete(id: string): string | Promise<string>;
}

export interface IQuery {
    heroes(): HeroDTO[] | Promise<HeroDTO[]>;
    hero(id: string): HeroDTO | Promise<HeroDTO>;
    temp__(): boolean | Promise<boolean>;
}

export interface ISubscription {
    heroCreated(): HeroDTO | Promise<HeroDTO>;
}
