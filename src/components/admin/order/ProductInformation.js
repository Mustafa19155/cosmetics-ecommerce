import Image from "next/image";
import React from "react";

const ProductInformation = ({ order }) => {
  return (
    <div>
      <p className="text-3xl font-bold mb-8">Products Information</p>
      <div className="bg-white shadow-cart-wrapper p-8 rounded-lg  max-w-[calc(100vw_-_100px)]">
        <div class="relative overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="bg-white border-b border-primary">
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetails.items.map((item) => {
                return (
                  <tr class="bg-white border-b border-primary">
                    <td class="flex gap-2 items-center py-4">
                      <Image src={item.image} className="h-[90px] w-[90px]" />
                      <div className="flex flex-col justify-center overflow-hidden">
                        <p className="text-lg font-bold">{item.name}</p>
                        <p className="text-secondary max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-2 whitespace-normal">
                          {item.description}
                        </p>
                      </div>
                    </td>
                    <td class="py-4 px-8">{item.quantity}</td>
                    <td class="text-lg font-bold pb-6 px-1">${item.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td className="text-xl font-bold p-2">Grand Total</td>
                <td></td>
                <td className="text-xl font-bold p-2">${order.finalTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
