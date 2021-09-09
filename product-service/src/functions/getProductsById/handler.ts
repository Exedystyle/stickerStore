import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { Client } from 'pg';
import { dbOptions } from 'src/utils/db-options';


const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof Object> = async (event) => {
  console.log('getProductsById invoked --- ', event);
  console.log('Received productId --- ', event.pathParameters.productId);

  const client = new Client(dbOptions);
  await client.connect();

  try {
    const { productId } = event.pathParameters;
    const query = 
      `select products.*, stocks.count 
      from products 
      left join stocks on products.id = stocks.product_id where 
      id='${productId}'`;

    const { rows: sticker } = await client.query(query);
    console.log('Received sticker --- ', sticker);
    
    if(!sticker) return formatJSONResponse({msg: 'Sticker not found'}, 404);

    return formatJSONResponse(sticker)
  }
  catch(err) {
    return formatJSONResponse({msg: `something went wrong --- ${err}`}, 500);
  }
  finally {
    await client.end();
  };
}

export const main = middyfy(getProductsById);