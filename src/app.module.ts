import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './shared/guard/role.guard';
import { DatabaseModule } from './database.module';
import { GraphQLModule } from '@nestjs/graphql';




@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
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
