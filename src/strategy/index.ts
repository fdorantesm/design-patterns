import { Logger } from "./lib/logger.ts";
import { Strategy } from "./lib/enums/strategy.type.ts";

const logger = new Logger(Strategy.JSON);

logger.log("Hello world");
