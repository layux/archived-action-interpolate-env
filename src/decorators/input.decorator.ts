import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    const value = core.getInput(fieldName, { required });

    core.debug(`Input -> ${fieldName} = ${value}`);

    if (value) {
      core.debug(`Setting input: ${String(propertyKey)} = ${value} to target`);

      const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);

      if (descriptor) {
        core.debug(`Descriptor found for ${String(propertyKey)}`);

        descriptor.value = value;
        Object.defineProperty(target, propertyKey, descriptor);
      }
    }
  };
