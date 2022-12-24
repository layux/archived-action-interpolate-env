/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

export const ActionInput =
  (): ClassDecorator =>
  <TFunction extends Function>(target: TFunction): TFunction | void => {
    // Get all inputs metadata from class and assign properties to instance on construction
    const inputs = Reflect.getMetadata('action:inputs', target) || {};
    const f = (...args: Array<any>): any => {
      const instance = target(...args);

      for (const key of Object.keys(inputs)) {
        instance[key] = inputs[key];
      }

      return instance;
    };

    f.prototype = target.prototype;
    return f as any;
  };
