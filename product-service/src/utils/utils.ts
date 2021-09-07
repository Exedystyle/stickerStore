const stickers = [
  {
    "count": 4,
    "description": "Base White non transparent sticker",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    "price": 100,
    "title": "Base Sticker"
  },
  {
    "count": 6,
    "description": "Base size sticker with black letters and transparent background",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a0",
    "price": 120,
    "title": "Invisible Sticker "
  },
  {
    "count": 7,
    "description": "Small version of Base Sticker",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a2",
    "price": 80,
    "title": "Short Sticker"
  },
  {
    "count": 12,
    "description": "Color inversioned Base Sticker",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    "price": 140,
    "title": "Black Sticker"
  },
  {
    "count": 7,
    "description": "Small version of color inversioned Base Sticker",
    "id": "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    "price": 130,
    "title": "Short Black Sticker"
  },
  {
    "count": 8,
    "description": "Sticker with gray background",
    "id": "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    "price": 140,
    "title": "Gray Sticker"
  },
  {
    "count": 2,
    "description": "Sticker with deep gray background",
    "id": "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    "price": 23,
    "title": "Deep Gray Sticker"
  },
  {
    "count": 3,
    "description": "Sticker with light gray background",
    "id": "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    "price": 15,
    "title": "Light Gray Sticker"
  }
];

const getAllStickers = async () => {
  return stickers;
}

const getStickerById = async (requiredId: string) => {
  const sticker = stickers.find(sticker => sticker.id === requiredId);
  
  if(!sticker){
    return null;
  }

  return sticker;
}

export { getAllStickers, getStickerById }; 