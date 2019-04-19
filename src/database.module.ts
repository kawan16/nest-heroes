import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigurationService } from 'src/shared/service/configuration.service';
import { ConfigurationModule } from './configuration.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigurationModule],
            useFactory: (configuration) => {
              return {
                type: 'mongodb',
                host: configuration.get('HOST'), 
                port: configuration.get('PORT'), 
                database: configuration.get('DATABASE'), 
                entities: [join(__dirname, '**/**.entity{.ts,.js}')],
              }
            },
            inject: [ConfigurationService]
          }),
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {
}
