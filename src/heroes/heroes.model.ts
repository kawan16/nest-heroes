
import { IsString, IsArray, IsIn, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';

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
export class HeroDTO {

    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsArray()
    readonly superpowers: string[];

    @IsString()
    @IsIn(['M', 'F'])
    readonly gender: 'M' | 'F';

    @IsString()
    readonly placeBirth: string;
}

/** Hero to create DTO type */
export class CreateHeroDTO extends HeroDTO {

    @IsEmpty()
    @IsOptional()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsArray()
    @IsOptional()
    readonly superpowers: string[];

    @IsString()
    @IsIn(['M', 'F'])
    @IsOptional()
    readonly gender: 'M' | 'F';

    @IsString()
    @IsOptional()
    readonly placeBirth: string;
}









