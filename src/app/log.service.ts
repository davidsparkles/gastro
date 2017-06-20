import { Injectable } from '@angular/core'

@Injectable()
export class LogService {

  constructor() { }

  public info(message: string): void {
    console.log(`${this.getTime()}: ${message}`)
  }

  public error(message: string): void {
    console.log(`%c${this.getTime()}: ${message}`, 'color: red')
  }

  private getTime(): string {
    return (new Date()).toLocaleString()
  }

}
