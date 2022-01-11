import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class appRepositoryMock {
  baseAccount = 0;
  add(value): number {
    return this.baseAccount + value;
  }
}

describe('AppController', () => {
  let appController: AppController;
  let appRepository: appRepositoryMock;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('deposit', () => {
    it('should deposi first balance', () => {
      expect(appController.deposit(50)).toBe(50);
    });
  });

  describe('deposit', () => {
    it('should add amount to base value', () => {
      appRepository.add(50);
      expect(appController.deposit(10)).toBe(60);
    });
  });
});
