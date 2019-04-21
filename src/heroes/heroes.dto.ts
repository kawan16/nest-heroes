import { Field, ObjectType, InputType } from 'type-graphql';


/** Base type for Hero DTO */
@ObjectType()
export class HeroDTO {

    @Field()
    readonly id: string;

    @Field()
    readonly name: string;

    @Field(type => [String], { nullable: true })
    readonly superpowers: string[];

    @Field({ nullable: true })
    readonly gender: 'M' | 'F';

    @Field({ nullable: true })
    readonly placeBirth: string;
}

/** Hero to create DTO type */
@InputType()
export class CreateHeroDTO {

    @Field()
    readonly name: string;

    @Field(type => [String], { nullable: true })
    readonly superpowers: string[];

    @Field({ nullable: true })
    readonly gender: 'M' | 'F';

    @Field({ nullable: true })
    readonly placeBirth: string;
}


/** Hero to update DTO type */
@InputType()
export class UpdateHeroDTO {
    @Field()
    readonly id: string;

    @Field()
    readonly name: string;

    @Field(type => [String], { nullable: true })
    readonly superpowers: string[];

    @Field({ nullable: true })
    readonly gender: 'M' | 'F';

    @Field({ nullable: true })
    readonly placeBirth: string;
}









