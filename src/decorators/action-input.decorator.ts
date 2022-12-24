import 'reflect-metadata';

export const ActionInput = (): ClassDecorator => (target) => {
  // Get all inputs metadata from class and assign properties to instance on construction
  const inputs = Reflect.getMetadata('action:inputs', target) || {};

  // We need to use a proxy to intercept the constructor and assign the inputs to the instance
  const proxy = new Proxy(target, {
    construct: (construct, args) => {
      const instance = construct(...args);
      Object.assign(instance, inputs);
      return instance;
    },
  });

  // Set the proxy as the new target
  Reflect.defineMetadata('action:inputs', inputs, proxy);
  return proxy;
};
