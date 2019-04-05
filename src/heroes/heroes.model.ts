

/**  
 * Types related to heroes
 */

/** Base type for Hero */
export interface Hero {
    id?: string;
    name: string;
    superpowers: string[];
    gender: 'M' | 'F',
    placeBirth: string;
}

/** Base type for Hero DTO */
export type HeroDTO = Hero | null;

/** Hero to create DTO type */
export type CreateHeroDTO = Pick<HeroDTO, Exclude<keyof HeroDTO, "id">>;








