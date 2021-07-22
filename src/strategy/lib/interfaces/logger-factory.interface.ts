import { LoggerStrategy } from "./logger-strategy.interface.ts";

export interface LoggerFactory {
  create(): LoggerStrategy;
}
