export class appRepository {
  baseAccount = 0;

  add(value): number {
    return this.baseAccount + value;
  }
}
