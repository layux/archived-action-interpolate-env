import { InterpolateActionInputDto } from './dtos/interpolate-action-input.dto';
import { debug } from '@actions/core';

async function run(): Promise<void> {
  const input = new InterpolateActionInputDto();
  debug(`input: ${JSON.stringify(input)}`);
}

run();
