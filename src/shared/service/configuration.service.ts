import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigurationService {

  private readonly configurationEnvironment: { [key: string]: string };

  constructor(filePath: string) {
    this.configurationEnvironment = dotenv.parse(fs.readFileSync(filePath))
  }

  get(key: string): string {
    return this.configurationEnvironment[key];
  }
}
