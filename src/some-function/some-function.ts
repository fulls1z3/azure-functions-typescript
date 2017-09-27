import { Context, HttpRequest, HttpResponse } from 'azure-functions-ts-essentials';

export function run(context: Context, req: HttpRequest): any {
  context.log('TypeScript HTTP trigger function processed a request.');

  let res: HttpResponse | null = null;

  if (req.query.name || (req.body && req.body.name))
    res = {
      status: 200,
      body: `Hello ${req.query.name || req.body.name}`
    };
  else
    res = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body'
    };

  context.done(undefined, res);
}
