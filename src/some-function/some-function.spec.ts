import { Context, HttpMethod, HttpRequest, HttpStatusCode } from 'azure-functions-ts-essentials';
import { run, TEST_ID, TEST_REQUEST_BODY } from './some-function';

describe('@azure-seed/azure-functions-typescript', () => {
  describe('some-function', () => {
    it('should be able to return success code using Http GET w/`id`', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('name');
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Get,
        params: {
          id: TEST_ID
        },
        query: {},
        body: {}
      };

      run(mockContext, mockRequest);
    });

    it('should be able to return success code using Http GET', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('data');
          expect(response.body).toHaveProperty('url');
          expect(response.body).toHaveProperty('hasMore');
          expect(response.body).toHaveProperty('totalCount');
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Get,
        params: {},
        query: {},
        body: {}
      };

      run(mockContext, mockRequest);
    });

    it('should be able to return success code using Http POST', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('name');
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Post,
        params: {},
        query: {},
        body: TEST_REQUEST_BODY
      };

      run(mockContext, mockRequest);
    });

    it('should not return success code using Http PATCH', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.MethodNotAllowed);
          expect(response.body).toEqual({
            error: {
              type: 'not_supported',
              message: 'PATCH operations are not supported.'
            }
          });
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Patch,
        params: {
          id: TEST_ID
        },
        query: {},
        body: TEST_REQUEST_BODY
      };

      run(mockContext, mockRequest);
    });

    it('should be able to return success code using Http PUT', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('name');
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Put,
        params: {
          id: TEST_ID
        },
        query: {},
        body: TEST_REQUEST_BODY
      };

      run(mockContext, mockRequest);
    });

    it('should be able to return success code using Http DELETE', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('deleted');
          expect(response.body).toHaveProperty('id');
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Delete,
        params: {
          id: TEST_ID
        },
        query: {},
        body: {}
      };

      run(mockContext, mockRequest);
    });

    it('should not return success code using any other Http method', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.MethodNotAllowed);
          expect(response.body).toEqual({
            error: {
              type: 'not_supported',
              message: 'Method XYZ not supported.'
            }
          });
        },
        log: () => {/**/}
      };

      const mockRequest: HttpRequest = {
        method: 'XYZ' as HttpMethod,
        params: {},
        query: {},
        body: {}
      };

      run(mockContext, mockRequest);
    });
  });
});
