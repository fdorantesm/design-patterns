import { LoggerStrategy } from "../interfaces/logger-strategy.interface.ts";
import { AnotherStrategy } from "../strategies/another.strategy.ts";
import { ConsoleStrategy } from "../strategies/console.strategy.ts";
import { FileStrategy } from "../strategies/file.strategy.ts";
import { JsonStrategy } from "../strategies/json.strategy.ts";
import { Strategy } from "../enums/strategy.type.ts";

export class LoggerFactory {
  static createFor(strategyName: Strategy): LoggerStrategy {
    switch (strategyName) {
      case "console": {
        return LoggerFactory.createConsole();
      }
      case "file": {
        return LoggerFactory.createFile();
      }
      case "json": {
        return LoggerFactory.createJson();
      }
      case "another": {
        return LoggerFactory.createAnother();
      }
      default: {
        return LoggerFactory.createConsole();
      }
    }
  }

  static createAnother(): LoggerStrategy {
    return new AnotherStrategy();
  }

  static createJson(): LoggerStrategy {
    return new JsonStrategy();
  }

  static createFile(): LoggerStrategy {
    return new FileStrategy();
  }

  static createConsole(): LoggerStrategy {
    return new ConsoleStrategy();
  }
}
