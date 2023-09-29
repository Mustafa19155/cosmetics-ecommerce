import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@/assets/icons/delete-gray.svg";
import EditIcon from "@/assets/icons/edit-gray.svg";
import DeleteModal from "@/components/Modals/DeleteModal";
import CategoryModal from "@/components/Modals/BrandModal";
import SubCategoryModal from "@/components/Modals/SubCategoryModal";
import { deleteCategory } from "@/api/categories";

const SubCategoryTable = ({ mainPros, setmainPros, brands }) => {
  const [allChecked, setallChecked] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [editModalOpen, seteditModalOpen] = useState(false);
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

  const handleDelete = () => {
    deleteCategory({ id: activeModalData._id })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
    setdeleteModalOpen(false);
  };
  const handleEdit = () => {
    seteditModalOpen(false);
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
        open={deleteModalOpen}
        onclose={() => setdeleteModalOpen(false)}
        onconfirm={handleDelete}
        type={"Category"}
      />
      <SubCategoryModal
        brands={brands}
        open={editModalOpen}
        category={activeModalData}
        onclose={() => seteditModalOpen(false)}
        onconfirm={handleEdit}
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
              Category Name
            </th>
            <th className="p-3" scope="col">
              Brand
            </th>
            <th className="p-3" scope="col">
              Products
            </th>
            <th className="p-3" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {mainPros.map((item, index) => {
            return (
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
                  <p className="sm:max-w-[300px] md:max-w-[150px] lg:max-w-[400px] truncate line-clamp-3 whitespace-normal">
                    {item.name}
                  </p>
                </td>

                <td class="px-3 py-4">
                  <p className="sm:max-w-[300px] md:max-w-[150px] lg:max-w-[400px] truncate line-clamp-3 whitespace-normal">
                    {item.brand?.name}
                  </p>
                </td>
                <td class="px-3 py-4">{item.productsCount}</td>
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
                    <Image
                      src={EditIcon}
                      className="cursor-pointer"
                      onClick={() => {
                        setactiveModalData(item);
                        seteditModalOpen(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategoryTable;
