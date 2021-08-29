import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getStickerById } from 'src/utils/utils';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof Object> = async (event) => {
  try {
    const { productId } = event.pathParameters;
    const sticker = await getStickerById(productId);
    
    if(!sticker) return formatJSONResponse({msg: 'Sticker not found'}, 404);

    return formatJSONResponse(sticker)
  }
  catch(err) {
    return formatJSONResponse({msg: `something went wrong --- ${err}`}, 500);
  }
}

export const main = middyfy(getProductsById);