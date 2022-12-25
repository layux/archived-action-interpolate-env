import * as core from '@actions/core';
import * as yaml from 'yaml';

export const YamlArray = (): PropertyDecorator => (target, propertyKey) => {
  const currentValue = Reflect.get(target, propertyKey);

  core.debug(`YamlArray: ${String(propertyKey)} = ${currentValue} (${typeof currentValue})`);

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
