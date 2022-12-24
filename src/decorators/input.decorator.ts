import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    const inputValue = core.getInput(fieldName, { required });
    core.debug(`Setting input: ${String(propertyKey)} = ${inputValue} to target`);

    const inputs = Reflect.getMetadata('action:inputs', target) || {};
    Reflect.metadata('action:inputs', { ...inputs, [propertyKey]: inputValue });
  };
