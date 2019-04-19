import { Module, CacheModule as NestCacheManager, CacheInterceptor } from '@nestjs/common';
import { ConfigurationModule } from './configuration.module';
import { ConfigurationService } from './shared/service/configuration.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
    imports: [
      NestCacheManager.registerAsync({
            imports: [ConfigurationModule],
            useFactory: (configuration) => {
              console.log( ' SET UP');
              return {
                ttl: configuration.get('CACHE_TTL'), // seconds
                max: configuration.get('CACHE_MAX'), // maximum number of items in cache
                isCacheableValue: value => {
                  console.log( ' value ', value );
                  return true;
                }
              }
            },
            inject: [ConfigurationService]
        }),
    ],
    exports: [NestCacheManager],
    providers: [
      {
        provide: APP_INTERCEPTOR,
        useClass: CacheInterceptor,
      },
    ]
})
export class CacheModule {}
