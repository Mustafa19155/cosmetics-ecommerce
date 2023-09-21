import ProductWrapper from "@/components/admin/product/ProductWrapper";
import React from "react";
import ProductImg from "../../../../assets/images/product-detail.png";

const getData = async () => {
  return [
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 3,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "Espresso Filma",
      availability: true,
      price: 11.7,
      quantity: 6,
    },
    {
      image: ProductImg,
      name: "espresso Filama",
      availability: true,
      price: 11.7,
      quantity: 0,
    },
  ];
};

const getCategories = async () => {
  return [
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
    {
      name: "category name",
      productsCount: 10,
    },
  ];
};

const Page = async () => {
  const data = (await getData()).map((d, index) => {
    return { ...d, selected: false, name: index.toString() + "a" };
  });

  const cats = (await getCategories()).map((d, index) => {
    return { ...d, selected: false, name: d.name + index };
  });

  return (
    <div>
      <ProductWrapper products={data} categories={cats} />
    </div>
  );
};

export default Page;
