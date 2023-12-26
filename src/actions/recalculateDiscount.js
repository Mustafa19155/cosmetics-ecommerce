const { getUserOffers } = require("@/api/offers");

export const recalculateDiscount = ({ products, allOffers }) => {
  console.log(products);
  let activeOffer = {};

  const globalOffers = allOffers.filter((offer) => offer.all == true);

  if (globalOffers.length > 0) {
    activeOffer = globalOffers.sort((a, b) => a.discount - b.discount)[
      globalOffers.length - 1
    ];

    return products.map((pro) => {
      const disPrice = pro.price * (activeOffer.discount / 100);
      return {
        ...pro,
        price: pro.price,
        discount: activeOffer.discount,
        discountedPrice: pro.price - disPrice,
      };
    });
  } else {
    return products.map((pro) => {
      const foundOffer = allOffers.find(
        (offer) => offer.brand == pro.category.brand
      );
      if (foundOffer) {
        const disPrice = pro.price * (foundOffer.discount / 100);
        return {
          ...pro,
          price: pro.price,
          discount: foundOffer.discount,
          discountedPrice: pro.price - disPrice,
        };
      } else {
        return {
          ...pro,
          price: pro.price,
          discount: pro.discount,
          discountedPrice: pro.discountedPrice,
        };
      }
    });
  }
};
