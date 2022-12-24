import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    const inputValue = core.getInput(fieldName, { required });

    core.debug(`Input -> ${fieldName} = ${inputValue}`);

    if (inputValue) {
      core.debug(`Setting input: ${String(propertyKey)} = ${inputValue} to target`);

      const privatePropertyKey = Symbol();

      Reflect.defineProperty(target, propertyKey, {
        get: () => Reflect.get(target, privatePropertyKey),
        set: () => Reflect.set(target, privatePropertyKey, inputValue),
      });
    }
  };
