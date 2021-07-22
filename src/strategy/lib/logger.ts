import { LoggerStrategy } from "./interfaces/logger-strategy.interface.ts";
import { LoggerInterface } from "./interfaces/logger.interface.ts";
import { LoggerFactory } from "./factories/logger.factory.ts";
import { Strategy } from "./enums/strategy.type.ts";

export class Logger implements LoggerInterface {
  strategy: LoggerStrategy;

  constructor(strategyName: Strategy) {
    this.strategy = LoggerFactory.createFor(strategyName);
  }

  public log(message: string): void {
    this.strategy.log(message);
  }
}
