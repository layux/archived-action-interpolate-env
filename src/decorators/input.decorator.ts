import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    // Read action:inputs metadata from class
    const inputs = Reflect.getMetadata('action:inputs', target) || {};

    // Add input to metadata and set metadata on class only for this call
    Reflect.defineMetadata(
      'action:inputs',
      {
        ...inputs,
        [propertyKey]: core.getInput(fieldName, { required }),
      },
      target
    );
  };
