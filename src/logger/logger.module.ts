import { Module } from '@nestjs/common';
import { LoggerController } from './logger.controller';

@Module({
  controllers: [LoggerController]
})
export class LoggerModule {}
