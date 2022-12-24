import 'reflect-metadata';
import * as core from '@actions/core';

export const ActionInput = (): ClassDecorator => (target) => {
  // Get all inputs metadata from class
  const inputs = Reflect.getMetadata('action:inputs', target) || {};

  core.debug(`Class ${target.name} has inputs: ${JSON.stringify(inputs)}`);

  // We need to use a proxy to intercept the constructor and assign the inputs to the instance
  const proxy = new Proxy(target, {
    construct: (construct, args) => {
      // Ensure the constructor is called with the correct arguments
      // Since we can't call new target(...args) we need to use the Reflect API
      core.debug(`Constructing ${target.name} with args: ${JSON.stringify(args)}`);

      const instance = Reflect.construct(construct, args);
      Object.assign(instance, inputs);

      core.debug(`Constructed ${target.name} and assigned input: ${JSON.stringify(instance)}`);

      return instance;
    },
  });

  // Set the proxy as the new target
  Reflect.defineMetadata('action:inputs', inputs, proxy);
  return proxy;
};
