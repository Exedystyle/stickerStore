import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { Client } from 'pg';
import { dbOptions } from 'src/utils/db-options';

const addProduct: ValidatedEventAPIGatewayProxyEvent<typeof Object> = async (event) => {
  console.log('addProduct invoked --- ', event);
  console.log('params --- ', event.body);

  const client = new Client(dbOptions);
  await client.connect();

  try {
  }
  catch(err) {
    return formatJSONResponse({msg: `something went wrong --- ${err}`}, 500);
  }
  finally {
    await client.end();
  }
}

export const main = middyfy(addProduct);