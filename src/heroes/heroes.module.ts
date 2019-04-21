import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes.entity';
import { HeroesResolver } from './heroes.resolver';


@Module({
  imports: [
    TypeOrmModule.forFeature([Hero]),
  ],
  providers: [HeroesService, HeroesResolver]
})
export class HeroesModule {}
