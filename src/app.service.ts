import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  apiVersion(): { version: string } {
    return { version: 'v1' };
  }
}
