import core from '@actions/core';
import { getInputEnvironmentVariables } from '../utils/environment.util';

export const ActionInput = (): ClassDecorator => (target) => {
  // Process input environment variables
  const inputOptions = getInputEnvironmentVariables();
  const options: Record<string, unknown> = {};

  core.debug(`Input options: ${JSON.stringify(inputOptions)}`);

  Object.keys(inputOptions).reduce((acc, key) => {
    const keyCamelCase = key.replace(/^INPUT_/, '').replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    core.debug(`Converted input key ${key} to ${keyCamelCase} with value ${inputOptions[key]}`);
    options[keyCamelCase] = inputOptions[key];
    return acc;
  });

  // Construct the instance with the options
  for (const inputKey of Object.keys(options)) {
    target.prototype[inputKey] = options[inputKey];
    core.debug(`Prototype ${inputKey} set to ${options[inputKey]}`);
  }
};
