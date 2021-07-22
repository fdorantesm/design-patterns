import * as log from "https://deno.land/std/log/mod.ts";

import { LoggerStrategy } from "../interfaces/logger-strategy.interface.ts";

export class AnotherStrategy implements LoggerStrategy {
  public readonly name = "another";
  public log(message: string) {
    log.info(message);
  }
}
