/* eslint-disable @typescript-eslint/no-explicit-any */
import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    const inputValue = core.getInput(fieldName, { required });
    const privatePropertyKey = Symbol();

    core.debug(`Setting input: ${String(propertyKey)} = ${inputValue} to target`);

    Reflect.defineProperty(target, propertyKey, {
      get(this: any) {
        return this[privatePropertyKey];
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      set(this: any, _newValue: any) {
        this[privatePropertyKey] = inputValue;
      },
    });
  };
