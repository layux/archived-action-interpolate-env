import * as yaml from 'yaml';

export const YamlArray = (): PropertyDecorator => (target, propertyKey) => {
  const currentValue = Reflect.get(target, propertyKey);

  if (currentValue && typeof currentValue === 'string') {
    Reflect.deleteProperty(target, propertyKey);
    Reflect.defineProperty(target, propertyKey, {
      value: yaml.parse(currentValue),
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
};
