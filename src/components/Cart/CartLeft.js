import React from "react";
import DeleteIcon from "../../assets/icons/delete.svg";
import Image from "next/image";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";

const CartLeft = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">Cart</p>
        <div className="flex gap-2">
          <Image src={DeleteIcon} />
          <p>Remove All</p>
        </div>
      </div>

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
            {data.items.map((item) => {
              return (
                <tr class="bg-white border-b border-primary">
                  <td class="flex gap-2 items-center py-4">
                    <Image src={item.image} className="h-[90px] w-[90px]" />
                    <div className="flex flex-col justify-center overflow-hidden">
                      <p className="text-lg font-bold max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-4 whitespace-normal">
                        {item.name}
                      </p>
                      <p className="text-secondary">{item.description}</p>
                    </div>
                  </td>
                  <td class="py-4">
                    <div className="flex gap-8 items-center px-4 py-2 border-primary border w-fit">
                      <Image
                        src={MinusIcon}
                        // onClick={handleDecrement}
                        className="cursor-pointer h-[12px] w-[10px]"
                      />
                      <p className="font-bold">{item.quantity}</p>
                      <Image
                        src={PlusIcon}
                        // onClick={handleIncrement}
                        className="cursor-pointer h-[12px] w-[10px]"
                      />
                    </div>
                    <div className="flex gap-1 items-center mt-1">
                      <Image src={DeleteIcon} />
                      <p>Remove</p>
                    </div>
                  </td>
                  <td class="text-lg font-bold pb-6">${item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartLeft;
