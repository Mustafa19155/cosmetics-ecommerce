import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@/assets/icons/delete-gray.svg";
import EditIcon from "@/assets/icons/edit-gray.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeleteModal from "@/components/Modals/DeleteModal";
import { deleteProduct } from "@/api/products";

const ProductsTable = ({ mainPros, setmainPros }) => {
  const [allChecked, setallChecked] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [activeModalData, setactiveModalData] = useState(null);

  const handleCheckPro = (index) => {
    setmainPros(
      mainPros.map((pro, i) => {
        if (i == index) {
          return {
            ...pro,
            selected: !pro.selected,
          };
        }
        return pro;
      })
    );
  };

  const handleCheckAll = () => {
    if (allChecked) {
      setmainPros(
        mainPros.map((pro) => {
          return { ...pro, selected: false };
        })
      );
    } else {
      setmainPros(
        mainPros.map((pro) => {
          return { ...pro, selected: true };
        })
      );
    }
  };

  const handleDeleteProduct = () => {
    deleteProduct({ id: activeModalData._id })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (mainPros.length > 0) {
      mainPros.filter((pro) => !pro.selected).length == 0
        ? setallChecked(true)
        : setallChecked(false);
    } else {
      setallChecked(false);
    }
  }, [mainPros]);

  return (
    <div class="relative overflow-x-auto">
      <DeleteModal
        onclose={() => setdeleteModalOpen(false)}
        onconfirm={handleDeleteProduct}
        type={"Product"}
        open={deleteModalOpen}
      />
      <table class="w-full text-left">
        <thead>
          <tr class="bg-white border-b-2 border-gray-2">
            <th className="p-3">
              <input
                type="checkbox"
                className="accent-black h-5 w-5 cursor-pointer"
                checked={allChecked}
                onChange={handleCheckAll}
              />
            </th>
            <th className="p-3" scope="col">
              Image
            </th>
            <th className="p-3" scope="col">
              Product Name
            </th>
            <th className="p-3" scope="col">
              Availability
            </th>
            <th className="p-3" scope="col">
              Price
            </th>
            <th className="p-3" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {mainPros.map((item, index) => {
            return (
              <>
                <tr class="bg-white border-b border-gray-2 rounded-lg">
                  <td className="px-3 py-4">
                    <input
                      onChange={() => handleCheckPro(index)}
                      type="checkbox"
                      className="accent-black h-5 w-5 cursor-pointer"
                      checked={item.selected}
                    />
                  </td>

                  <td class="px-3 py-4">
                    <img
                      src={item?.images?.length > 0 ? item.images[0] : ""}
                      className="h-[36px] w-[36px] object-cover"
                    />
                  </td>
                  <td class="px-3 py-4">
                    <p className="sm:max-w-[300px] md:max-w-[150px] lg:max-w-[400px] truncate line-clamp-3 whitespace-normal">
                      {item.name}
                    </p>
                  </td>
                  <td class="px-3 py-4">
                    {item.quantity > 0 ? "In Stock" : "Out of Stock"}
                  </td>
                  <td class="px-3 py-4">€{item.price}</td>
                  <td class="px-3 py-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={DeleteIcon}
                        className="cursor-pointer"
                        onClick={() => {
                          setactiveModalData(item);
                          setdeleteModalOpen(true);
                        }}
                      />
                      <Link href={`product/edit/${item._id}`}>
                        <Image src={EditIcon} />
                      </Link>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
