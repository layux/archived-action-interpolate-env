import * as core from '@actions/core';

export const Input =
  (fieldName: string): PropertyDecorator =>
  (target, propertyKey) => {
    const value = core.getInput(fieldName);

    core.debug(`Input: ${fieldName} = ${value}`);

    if (value) {
      core.debug(`Setting input: ${String(propertyKey)} = ${value} to target object -> ${target}`);

      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
      });
    }
  };
