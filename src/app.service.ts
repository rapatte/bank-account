import { Injectable } from '@nestjs/common';
import { appRepository } from './app.repository';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  deposit(amount): number {
    return appRepository.add(amount);
  }
}
