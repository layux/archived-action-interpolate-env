import * as core from '@actions/core';
import { InterpolateActionInputDto } from './dtos/interpolate-action-input.dto';

async function run(): Promise<void> {
  const input = new InterpolateActionInputDto();
  core.info(`input: ${JSON.stringify(input)}`);

  core.debug(`env file: ${input.envFile}`);
}

run();
