import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { Client } from 'pg';
import { dbOptions } from 'src/utils/db-options';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof Object> = async () => {
  console.log('getProductsList invoked');
  const client = new Client(dbOptions);
  await client.connect();

  try {
    const query = 
      `select products.*, stocks.count 
      from products 
      left join stocks on products.id = stocks.product_id`;
    
    const { rows: stickers } = await client.query(query);
    console.log('Received stickers --- ', stickers);

    if(!stickers.length) return formatJSONResponse({msg: 'Stickers not found'}, 404);

    return formatJSONResponse(stickers)
  }
  catch(err) {
    return formatJSONResponse({msg: `something went wrong --- ${err}`}, 500);
  }
  finally {
    await client.end();
  }
}

export const main = middyfy(getProductsList);
