export interface LoggerStrategy {
  name: string;
  log: (...args: any[]) => any;
}
