import { LoggerStrategy } from "../interfaces/logger-strategy.interface.ts";

export class ConsoleStrategy implements LoggerStrategy {
  public readonly name = "console";
  public log(message: string) {
    console.log(message);
  }
}
