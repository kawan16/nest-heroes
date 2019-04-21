import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes.entity';
import { HeroesResolver } from './heroes.resolver';
import { HeroesController } from './heroes.controller';
import { Transport, ClientsModule } from '@nestjs/microservices';


@Module({
  imports: [
    TypeOrmModule.forFeature([Hero]),
    ClientsModule.register([{ name: 'HEROES_SERVICE', transport: Transport.TCP }]),
  ],
  providers: [HeroesService, HeroesResolver],
  controllers: [HeroesController]
})
export class HeroesModule {}
