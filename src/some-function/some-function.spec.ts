import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { run } from './some-function';

const testData: { name: string } = {
  name: 'Azure'
};

describe('@azure-seed/azure-functions-typescript', () => {
  describe('generator', () => {
    it('should be able to return success code w/request body', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined(); // never call the done function with an `Error`

          expect(response.status).toBe(200); // if succeeds, should return 200
          expect(response.body).toBe(`Hello ${testData.name}`);
        },
        log: () => {/**/} // use a jest mock here if the logs are important, in this case not
      };

      const mockRequest: HttpRequest = {
        body: testData,
        query: {}
      };

      run(mockContext, mockRequest);
    });

    it('should be able to return success code w/request query', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toBe(200);
          expect(response.body).toBe(`Hello ${testData.name}`);
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        body: {},
        query: testData
      };

      run(mockContext, mockRequest);
    });

    it('should not return success code w/o any input', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toBe(400);
          expect(response.body).toBe('Please pass a name on the query string or in the request body');
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        body: {},
        query: {}
      };

      run(mockContext, mockRequest);
    });
  });
});
