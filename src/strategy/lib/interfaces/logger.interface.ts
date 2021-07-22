import { LoggerStrategy } from "./logger-strategy.interface.ts";

export interface LoggerInterface {
  strategy: undefined | LoggerStrategy;
}
