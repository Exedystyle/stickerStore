import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { getAllStickers } from 'src/utils/utils';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof Object> = async () => {
  try {
    const stickers = await getAllStickers();

    if(!stickers) return formatJSONResponse({msg: 'Stickers not found'}, 404);

    return formatJSONResponse(stickers)
  }
  catch(err) {
    return formatJSONResponse({msg: `something went wrong --- ${err}`}, 500);
  }
}

export const main = middyfy(getProductsList);
