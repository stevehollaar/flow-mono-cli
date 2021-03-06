// @flow

const config = require('./config.js');

describe('config.resolveAndReadConfig()', () => {
  let findConfigUp;

  beforeEach(() => {
    findConfigUp = jest
      .spyOn(config._utils, 'findConfigUp')
      .mockImplementation(jest.fn());
  });

  afterEach(() => {
    findConfigUp.mockRestore();
  });

  it('should be a function', () => {
    expect(typeof config.resolveAndReadConfig).toBe('function');
  });

  it('should call the "find-config-up" package and return the resolved config', async () => {
    findConfigUp.mockReturnValue({foo: 'bar'});

    const cfg = await config.resolveAndReadConfig();

    expect(cfg).toEqual({foo: 'bar'});
  });
});
