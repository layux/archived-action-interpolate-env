import { InterpolateActionInputDto } from './dtos/interpolate-action-input.dto';
import core from '@actions/core';

async function run(): Promise<void> {
  const input = new InterpolateActionInputDto();
  core.info(`input: ${JSON.stringify(input)}`);
}

run();
