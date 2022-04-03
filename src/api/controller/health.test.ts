import { Request, Response } from 'express';
import health from './health';

describe('Health controller', () => {
  const jsonMock = jest.fn();
  const statusMock = jest.fn();

  const resMock: any = {
    status: statusMock.mockImplementation(() => ({
      json: jsonMock,
    })),
  };

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it('health success', async () => {
    // Call the controller.
    health({} as Request, resMock as Response);
    const compare = { health: 'OK' };

    // Assertions.
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(compare);
  });
});
