import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { JsonContentValidatorMiddleware } from './shared/middleware/json-content-validator.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './shared/guard/role.guard';
import { DatabaseModule } from './database.module';


@Module({
  imports: [
    DatabaseModule,
    HeroesModule
  ],
  providers: [
    {
        provide: APP_GUARD,
        useClass: RoleGuard,
    },
  ]
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JsonContentValidatorMiddleware, LoggerMiddleware)
      .forRoutes('*');
  }

}
