import { ObjectIdColumn, Column, Entity } from "typeorm";
import { Exclude, Transform } from 'class-transformer';

@Entity()
export class Hero {


    @ObjectIdColumn()
    @Transform(id => id.toString()) // Needed cause it's an ObjectId-type  object
    id: string;
  
    @Column()
    name: string;

    @Column()
    @Exclude() // This is a secret...
    realname: string;

    @Column()
    gender: 'M' | 'F';

    @Column()
    superpowers: string[];

    @Column()
    placeBirth: string;

}
