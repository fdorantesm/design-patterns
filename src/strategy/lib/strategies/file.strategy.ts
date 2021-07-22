import { LoggerStrategy } from "../interfaces/logger-strategy.interface.ts";

export class FileStrategy implements LoggerStrategy {
  public readonly name = "file";
  public async log(message: string): Promise<void> {
    await Deno.writeTextFileSync(
      Deno.realPathSync(".") + "/logs.txt",
      `${message}\n`,
      {
        append: true,
        create: true,
      }
    );
  }
}
