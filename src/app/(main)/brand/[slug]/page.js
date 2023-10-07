import { getUserSingleBrand } from "@/api/brands";
import Video from "@/components/Video";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const id = activePath.split("/")[activePath.split("/").length - 1];

  const data = await getUserSingleBrand({ id });
  return (
    <div className="my-16">
      <div>
        <div className="flex items-center justify-between w-[75%] sm:w-[50%]">
          <div className="w-full h-[300px]">
            <img src={data.brand.image} className="object-cover" />
          </div>
          {/* <p className="text-4xl font-bold">{data.brand.name}</p> */}
        </div>
        <div className="mt-12 flex flex-col gap-2">
          <p className="text-2xl font-bold">Description</p>
          <p>{data.brand.description}</p>
        </div>
        {/* <p>{data.brand.url}</p> */}
      </div>
      <div>
        <div className="my-12">
          {data.brand.url && <Video url={data.brand.url} />}
        </div>
        {/* <p className="text-3xl font-bold text-center">Categories</p> */}
        <div className="mt-12 flex flex-col gap-2">
          <p className="text-2xl font-bold">Categories</p>
          <div className="flex justify-center sm:justify-start flex-wrap mt-8 w-full">
            {data.categories.map((cat) => (
              <Link
                href={`/products/?category=${cat.name}`}
                className="w-[85%] sm:w-[44%] lg:w-[28%] text-center mt-10"
              >
                <img src={cat.image} className="w-full h-[9vw] min-h-[170px]" />
                <p className="text-xl mt-4 font-semibold">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
