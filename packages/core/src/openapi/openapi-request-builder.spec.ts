import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { OpenApiRequestBuilder } from './openapi-request-builder';

class TestApi {
  constructor(public axiosConfig: AxiosRequestConfig) {}
  fn: () => Promise<AxiosResponse<number>> = async () =>
    ({
      data: 1
    } as AxiosResponse<number>);
  nonAxiosResponse = async () => 1;
}

const destination = {
  url: 'http://example.com'
};

describe('openapi-request-builder', () => {
  it('executes request', async () => {
    const requestBuilder = new OpenApiRequestBuilder(TestApi, 'fn');
    const response = await requestBuilder.execute(destination);

    expect(response).toEqual(1);
  });

  it('throws an error if the given function does not exist', async () => {
    // This cannot happen in TS
    const requestBuilder = new OpenApiRequestBuilder(
      TestApi,
      'notAFunction' as any
    );

    await expect(() =>
      requestBuilder.execute(destination)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '"Could not execute request. \'notAFunction\' is not a function of TestApi."'
    );
  });

  it('throws an error if the response is not an axios response', async () => {
    // This should never happen
    const requestBuilder = new OpenApiRequestBuilder(
      TestApi,
      'nonAxiosResponse'
    );

    await expect(() =>
      requestBuilder.execute(destination)
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      "\"Cannot use 'in' operator to search for 'data' in 1\""
    );
  });
});
