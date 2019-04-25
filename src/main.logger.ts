import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { AppLoggerModule } from './app.logger.module';
import { join } from 'path';


/** Logger microservice */

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppLoggerModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    }
    
  });
  await app.listen(() => console.log('Logger Microservice is ready'));
}
bootstrap();
