import { Module } from '@nestjs/common';
import { ConfigurationService } from 'src/shared/service/configuration.service';

@Module({
    providers: [
      {
        provide: ConfigurationService,
        useValue: new ConfigurationService(`${process.env.NODE_ENV}.env`),
      },
    ],
    exports: [ConfigurationService],
  })
export class ConfigurationModule {

}
