import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  constructor(
    @Inject('LOGGER') private readonly client: ClientProxy,
  ) {}

  use(req: any, res: any, next: () => void) {
    console.log( ' TEST LOg')
    const pattern = 'log';
    const message = '[ HERO APP ] --> [' + req.method + '] ' + req.originalUrl; 
    this.client.emit<String>(pattern, message).subscribe( () => console.log( 'RE'));
    next();
  }
}
