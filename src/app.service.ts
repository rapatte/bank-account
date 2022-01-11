import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  const baseAccount = 50;
  getHello(): number {
    return this.baseAccount;
  }
  deposit(amount): number {
    return this.baseAccount + amount;
  }
}
