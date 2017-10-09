import { Context, HttpMethod, HttpRequest, HttpStatusCode } from 'azure-functions-ts-essentials';
import { run, TEST_ID, TEST_REQUEST_BODY } from './some-function';

describe('@azure-seed/azure-functions-typescript', () => {
  describe('GET /api/v0/some-function', () => {
    it('should be able to return a list of all items', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('data');
          expect(response.body).toHaveProperty('hasMore');
          expect(response.body).toHaveProperty('totalCount');
        }
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Get
      };

      run(mockContext, mockRequest);
    });
  });

  describe('GET /api/v0/some-function/:id', () => {
    it('should be able to return an item', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('name');
        }
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Get,
        params: {
          id: TEST_ID
        }
      };

      run(mockContext, mockRequest);
    });
  });

  describe('POST /api/v0/some-function', () => {
    it('should be able to create a new item', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.Created);
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('name');
        }
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Post,
        headers: { 'content-type': 'application/json' },
        body: TEST_REQUEST_BODY
      };

      run(mockContext, mockRequest);
    });
  });

  describe('PATCH /api/v0/some-function/:id', () => {
    it('should be able to update an existing item', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('object');
          expect(response.body).toHaveProperty('name');
        }
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Patch,
        headers: { 'content-type': 'application/json' },
        body: TEST_REQUEST_BODY,
        params: {
          id: TEST_ID
        }
      };

      run(mockContext, mockRequest);
    });
  });

  describe('DELETE /api/v0/some-function/:id', () => {
    it('should be able to return success code using Http DELETE', () => {
      const mockContext: Context = {
        done: (err, response) => {
          expect(err).toBeUndefined();

          expect(response.status).toEqual(HttpStatusCode.OK);
          expect(response.body).toHaveProperty('deleted');
          expect(response.body).toHaveProperty('id');
        }
      };

      const mockRequest: HttpRequest = {
        method: HttpMethod.Delete,
        params: {
          id: TEST_ID
        }
      };

      run(mockContext, mockRequest);
    });
  });

  describe('XYZ /api/v0/some-function', () => {
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
        }
      };

      const mockRequest: HttpRequest = {
        method: 'XYZ' as HttpMethod
      };

      run(mockContext, mockRequest);
    });
  });
});
