import { InterpolateActionInputDto } from './dtos/interpolate-action-input.dto';
import winston from 'winston';

async function run(): Promise<void> {
  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.label({ label: 'main' }),
      winston.format.align(),
      winston.format.timestamp(),
      winston.format.printf((info) => `${info.timestamp} [${info.level}] ${info.message}`)
    ),
    transports: [new winston.transports.Console()],
  });

  const input = new InterpolateActionInputDto();
  logger.info(`input: ${JSON.stringify(input)}`);
}

run();
