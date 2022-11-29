import { capital } from './rules';

export const toLower = (value: string) => {
  return value;
};

export const toUpper = (value: string) => {
  return value;
};

export const toCapital = (value: string) => {
  return value.replace(capital, (word) => {
    return word.toUpperCase();
  });
};

export const toPascal = (value: string) => {
  return value;
};

export const toCamel = (value: string) => {
  return value;
};

export const toKebab = (value: string) => {
  return value;
};

export const toSnake = (value: string) => {
  return value;
};
