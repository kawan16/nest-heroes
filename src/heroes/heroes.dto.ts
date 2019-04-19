
import { IsString, IsInt, ValidateIf, IsArray, IsIn, IsEmpty, IsNotEmpty, IsOptional, IsDefined } from 'class-validator';


/** Base type for Hero DTO */
export class HeroDTO {

    @IsString()
    readonly id?: string;

    @IsString()
    readonly name?: string;

    @IsArray()
    readonly superpowers?: string[];

    @IsString()
    @IsIn(['M', 'F'])
    readonly gender?: 'M' | 'F';

    @IsString()
    readonly placeBirth?: string;
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


/** Hero to create DTO type */
export class UpdateHeroDTO extends HeroDTO {

    @IsNotEmpty()
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









