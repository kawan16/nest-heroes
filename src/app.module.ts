import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './shared/guard/role.guard';
import { DatabaseModule } from './database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: true,
      playground: true,
    }),
    HeroesModule,
    DatabaseModule
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
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }

}
