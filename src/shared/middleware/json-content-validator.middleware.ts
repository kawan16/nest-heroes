import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class JsonContentValidatorMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
      next()
    }
  }
}
