import * as core from '@actions/core';
import { InterpolateActionInputDto } from './dtos/interpolate-action-input.dto';

async function run(): Promise<void> {
  const input = new InterpolateActionInputDto();
  const inputValues = {
    envFile: input.envFile,
    envFileAsFallback: input.envFileAsFallback,
    envVariablePrefix: input.envVariablePrefix,
    envVariableSuffix: input.envVariableSuffix,
    replaceFileExtensions: input.replaceFileExtensions,
    replaceFileExcludePaths: input.replaceFileExcludePaths,
  };

  core.info(`inputValues: ${JSON.stringify(inputValues)}`);
}

run();
