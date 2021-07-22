import { LoggerStrategy } from "../interfaces/logger-strategy.interface.ts";

export class JsonStrategy implements LoggerStrategy {
  public readonly name = "json";
  public log(message: string) {
    console.log({ message });
  }
}
