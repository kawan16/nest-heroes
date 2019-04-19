import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes.entity';
import { CacheModule } from 'src/cache.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Hero]),
    CacheModule
  ],
  controllers: [HeroesController],
  providers: [HeroesService]
})
export class HeroesModule {}
