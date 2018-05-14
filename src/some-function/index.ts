import { Context, HttpMethod, HttpRequest, HttpResponse, HttpStatusCode } from 'azure-functions-ts-essentials';

const OBJECT_NAME = 'someObject';

const getOne = (id: any) => {
  return {
    status: HttpStatusCode.OK,
    body: {
      id,
      object: OBJECT_NAME,
      ...TEST_REQUEST_BODY
    }
  };
};

const getMany = (req: HttpRequest) => {
  return {
    status: HttpStatusCode.OK,
    body: {
      object: 'list',
      data: [
        {
          id: TEST_ID,
          object: OBJECT_NAME,
          ...TEST_REQUEST_BODY
        }
      ],
      hasMore: false,
      totalCount: 1
    }
  };
};

const insertOne = (req: HttpRequest) => {
  return {
    status: HttpStatusCode.Created,
    body: {
      id: TEST_ID,
      object: OBJECT_NAME,
      ...req.body
    }
  };
};

const updateOne = (req: HttpRequest, id: any) => {
  return {
    status: HttpStatusCode.OK,
    body: {
      id,
      object: OBJECT_NAME,
      ...req.body
    }
  };
};

const deleteOne = (id: any) => {
  return {
    status: HttpStatusCode.OK,
    body: {
      deleted: true,
      id
    }
  };
};

export const TEST_ID = '57ade20771e59f422cc652d9';
export const TEST_REQUEST_BODY: { name: string } = {
  name: 'Azure'
};

/**
 * Routes the request to the default controller using the relevant method.
 */
export function run(context: Context, req: HttpRequest): any {
  let res: HttpResponse;
  const id = req.params
    ? req.params.id
    : undefined;

  switch (req.method) {
    case HttpMethod.Get:
      res = id
        ? getOne(id)
        : getMany(req);
      break;
    case HttpMethod.Post:
      res = insertOne(req);
      break;
    case HttpMethod.Patch:
      res = updateOne(req, id);
      break;
    case HttpMethod.Delete:
      res = deleteOne(id);
      break;

    default:
      res = {
        status: HttpStatusCode.MethodNotAllowed,
        body: {
          error: {
            type: 'not_supported',
            message: `Method ${req.method} not supported.`
          }
        }
      };
  }

  context.done(undefined, res);
}
