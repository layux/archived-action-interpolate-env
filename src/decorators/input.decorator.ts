import 'reflect-metadata';
import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    const input = core.getInput(fieldName, { required });

    Reflect.deleteProperty(target, propertyKey);
    Reflect.defineProperty(target, propertyKey, {
      value: input,
      writable: true,
      enumerable: true,
      configurable: true,
    });

    core.debug(`Input '${fieldName}' has value: '${input}'`);
    core.debug(`target -> [${target.constructor.name}] ${JSON.stringify(target)}`);
  };
