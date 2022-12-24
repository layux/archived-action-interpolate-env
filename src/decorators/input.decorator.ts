import * as core from '@actions/core';

export const Input =
  (fieldName: string): PropertyDecorator =>
  (target, propertyKey) => {
    const value = core.getInput(fieldName);

    core.debug(`Input: ${fieldName} = ${value}`);
    core.debug(`target: ${JSON.stringify(target, null, 2)}`);
    core.debug(`this: ${JSON.stringify(this, null, 2)}`);

    if (value) {
      core.debug(`Setting input: ${String(propertyKey)} = ${value} to target`);

      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
      });
    }
  };
