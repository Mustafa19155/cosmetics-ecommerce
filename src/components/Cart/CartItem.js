import { AuthContext } from "@/contexts/userContext";
import React, { useContext } from "react";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import Image from "next/image";

const CartItem = ({ item, index }) => {
  const { cart, setcart } = useContext(AuthContext);

  const handleDecrement = () => {
    if (item.quantity > 1) {
      const cartCopy = { ...cart };
      cartCopy.items[index].quantity -= 1;
      cartCopy.total -= item.product.discountedPrice;
      setcart(cartCopy);
    }
  };
  const handleIncrement = () => {
    if (item.quantity < item.product.quantity) {
      const cartCopy = { ...cart };
      cartCopy.items[index].quantity += 1;

      cartCopy.total += item.product.discountedPrice;
      setcart(cartCopy);
    }
  };
  const handleRemove = () => {
    setcart({
      ...cart,
      items: cart.items.filter((c) => item.product._id != c.product._id),
      total: cart.total - item.quantity * item.product.discountedPrice,
    });
  };

  return (
    <tr class="bg-white border-b border-primary">
      <td class="flex gap-2 items-center py-4">
        <div className="h-[90px] w-[90px] relative">
          {item.product.images[0] != "" && (
            <img src={item.product.images[0]} className="object-cover" />
          )}
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-lg font-bold max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-4 whitespace-normal notranslate">
            {item.product.name}
          </p>
          <p className="text-secondary truncate line-clamp-2 whitespace-normal max-w-[280px]">
            {item.product.description}
          </p>
        </div>
      </td>
      <td class="py-4">
        <div className="flex gap-8 items-center px-4 py-2 border-primary border w-fit">
          <Image
            src={MinusIcon}
            onClick={handleDecrement}
            className="cursor-pointer h-[12px] w-[10px]"
          />
          <p className="font-bold w-[15px] text-center">{item.quantity}</p>
          <Image
            src={PlusIcon}
            onClick={handleIncrement}
            className="cursor-pointer h-[12px] w-[10px]"
          />
        </div>
        <div
          className="flex gap-1 items-center mt-1 cursor-pointer"
          onClick={handleRemove}
        >
          <Image src={DeleteIcon} />
          <p>Remove</p>
        </div>
      </td>
      <td class="text-lg font-bold pb-6 notranslate">
        {item.product.discountedPrice.toFixed(2)}€
      </td>
    </tr>
  );
};

export default CartItem;
