import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hero])
  ],
  controllers: [HeroesController],
  providers: [HeroesService,]
})
export class HeroesModule {}
