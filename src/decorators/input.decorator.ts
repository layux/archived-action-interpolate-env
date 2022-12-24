import * as core from '@actions/core';

export const Input =
  (fieldName: string, required = false): PropertyDecorator =>
  (target, propertyKey) => {
    const inputs = Reflect.getMetadata('action:inputs', target.constructor) || {};
    const input = core.getInput(fieldName, { required });

    Reflect.defineMetadata(
      'action:inputs',
      {
        ...inputs,
        [propertyKey]: input,
      },
      target
    );

    core.debug(`this -> [${typeof this}] ${JSON.stringify(this)}`);
    core.debug(`target -> [${target.constructor.name}] ${JSON.stringify(target)}`);
    core.debug(`inputs -> [${typeof inputs}] ${JSON.stringify(inputs)}`);

    Object.assign(target, { [propertyKey]: input });

    core.debug(`Input ${fieldName} has value: ${input}, added to constructor inputs`);
  };
