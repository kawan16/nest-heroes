import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { JsonContentValidatorMiddleware } from './shared/middleware/json-content-validator.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './shared/guard/role.guard';
import { join } from 'path';


@Module({
  imports: [
    HeroesModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'heroes',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
        provide: APP_GUARD,
        useClass: RoleGuard,
    },
  ],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JsonContentValidatorMiddleware, LoggerMiddleware)
      .forRoutes('*');
  }

}
