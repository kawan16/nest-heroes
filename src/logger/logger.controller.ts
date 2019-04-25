import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class LoggerController {

    @EventPattern('log')
    async log(message: string) {
        console.log( 'Message ' , message );
    }

}
