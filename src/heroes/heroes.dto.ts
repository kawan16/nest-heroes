
import { IsString, IsInt, ValidateIf, IsArray, IsIn, IsEmpty, IsNotEmpty, IsOptional, IsDefined } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';


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
    @ApiModelProperty()
    readonly name: string;

    @IsArray()
    @IsOptional()
    @ApiModelProperty({required: false})
    readonly superpowers: string[];

    @IsString()
    @IsIn(['M', 'F'])
    @IsOptional()
    @ApiModelProperty({required: false, enum: ['M', 'F']})
    readonly gender: 'M' | 'F';

    @IsString()
    @IsOptional()
    @ApiModelProperty({required: false})
    readonly placeBirth: string;
}


/** Hero to update DTO type */
export class UpdateHeroDTO extends HeroDTO {

    @IsNotEmpty()
    @ApiModelProperty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly name: string;

    @IsArray()
    @IsOptional()
    @ApiModelProperty()
    readonly superpowers: string[];

    @IsString()
    @IsIn(['M', 'F'])
    @IsOptional()
    @ApiModelProperty()
    readonly gender: 'M' | 'F';

    @IsString()
    @IsOptional()
    @ApiModelProperty()
    readonly placeBirth: string;
}









