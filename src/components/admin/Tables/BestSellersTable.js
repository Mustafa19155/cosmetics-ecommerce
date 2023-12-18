import Image from "next/image";
import React from "react";

const BestSellersTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto">
      <table class="w-full text-left text-sm rounded-lg">
        <thead>
          <tr class="bg-gray-1 text-secondary">
            <th className="p-3 rounded-tl-lg">Product</th>
            <th className="p-3" scope="col">
              Price
            </th>
            <th className="p-3" scope="col">
              Sold
            </th>
            {/* <th className="p-3 rounded-tr-lg" scope="col">
              Profit
            </th> */}
          </tr>
        </thead>
        <tbody className="text-gray-3">
          {data.map((item, index) => {
            return (
              <tr class="bg-white border-b border-gray-2 rounded-lg">
                <td className="px-3 py-1">
                  <div className="flex items-center gap-3">
                    <div className="h-[40px] w-[40px] rounded-full bg-gray-1 p-1 overflow-hidden flex justify-center items-center">
                      {item.images.length > 0 && <img src={item.images[0]} />}
                    </div>
                    <p className="notranslate">{item.name}</p>
                  </div>
                </td>
                <td class="px-3 py-1 notranslate">€{item.price}</td>
                <td class="px-3 py-1">{item.sold}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BestSellersTable;
