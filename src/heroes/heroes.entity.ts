import { ObjectIdColumn, ObjectID, Column, Entity } from "typeorm";

@Entity()
export class Hero {

    @ObjectIdColumn()
    id: string;
  
    @Column()
    name: string;

    @Column()
    gender: 'M' | 'F';

    @Column()
    superpowers: string[];

    @Column()
    placeBirth: string;

}
