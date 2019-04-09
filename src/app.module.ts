import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { JsonContentValidatorMiddleware } from './shared/middleware/json-content-validator.middleware';

@Module({
  imports: [HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JsonContentValidatorMiddleware, LoggerMiddleware)
      .forRoutes('*');
  }

}
