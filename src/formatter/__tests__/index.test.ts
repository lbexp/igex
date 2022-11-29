import {
  toLower,
  toUpper,
  toCapital,
  toPascal,
  toCamel,
  toKebab,
  toSnake,
} from '../index';

describe('verify formatter', () => {
  it('should convert string to lower case format', () => {
    const string = toLower('LOREM Ipsum');

    expect(string).toEqual('lorem ipsum');
  });

  it('should convert string to upper case format', () => {
    const string = toUpper('Lorem ipsum');

    expect(string).toEqual('LOREM IPSUM');
  });

  it('should convert string to capital case format', () => {
    const string = toCapital('lorem ipsum');

    expect(string).toEqual('Lorem Ipsum');
  });

  it('should convert string to pascal case format', () => {
    const string = toPascal('lorem ipsum');

    expect(string).toEqual('LoremIpsum');
  });

  it('should convert string to camel case format', () => {
    const string = toCamel('lorem ipsum');

    expect(string).toEqual('loremIpsum');
  });

  it('should convert string to kebab case format', () => {
    const string = toKebab('lorem ipsum');

    expect(string).toEqual('lorem-ipsum');
  });

  it('should convert string to snake case format', () => {
    const string = toSnake('lorem ipsum');

    expect(string).toEqual('lorem_ipsum');
  });
});
