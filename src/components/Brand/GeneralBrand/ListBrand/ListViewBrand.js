import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { Pagination } from "@mui/material";
import FilterIcon from "@mui/icons-material/Filter";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { FiltersBrand } from "./FiltersBrand";
const DataBrand = [
  {
    id: 0,
    name: "Nguyễn Văn Đạt",
    img: "https://picsum.photos/id/237/200/300",
    totalProduct: 5,
    revenue: "1M",
    createAt: "2012-12-16",
  },
  {
    id: 1,
    name: "Brand A",
    img: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    totalProduct: 5,
    revenue: "1M",
    createAt: "2012-12-16",
  },
  {
    id: 2,
    name: "Brand B",
    img: "https://i.picsum.photos/id/682/200/300.jpg?grayscale&hmac=EL_3JV__BdQNFavU3KQ-Q0UQZoYhxqpO_SX3GcRb8Lo",
    totalProduct: 5,
    revenue: "1M",
    createAt: "2012-12-16",
  },
  {
    id: 3,
    name: "Brand B",
    img: "https://i.picsum.photos/id/1013/200/300.jpg?blur=5&hmac=oJcWOwuZvOe4VRVnham6SXfPK2ceOK0adU9WfMGnQIc",
    totalProduct: 5,
    revenue: "1M",
    createAt: "2012-12-16",
  },
  {
    id: 4,
    img: "https://i.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs",
    totalProduct: 5,
    revenue: "1M",
    name: "Nguyễn Văn Đạt",
    createAt: "2012-12-16",
  },
  {
    id: 5,
    img: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    totalProduct: 5,
    revenue: "1M",
    name: "Brand A",
    createAt: "2012-12-16",
  },
  {
    id: 6,
    name: "Brand B",
    img: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    totalProduct: 5,
    revenue: "1M",
    createAt: "2012-12-16",
  },
  {
    id: 7,
    img: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    totalProduct: 5,
    revenue: "1M",
    name: "Brand B",
    createAt: "2012-12-16",
  },
  {
    id: 8,
    img: "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    totalProduct: 5,
    revenue: "1M",
    name: "Brand B",
    createAt: "2012-12-16",
  },
];
const VARIANT = {
  contained: "contained",
  outlined: "outlined",
};
export const ListViewBrand = () => {
  const [variant, setVariant] = useState(VARIANT.contained);
  const handleButtonFilter = (e) => {
    if (variant === VARIANT.contained) setVariant(VARIANT.outlined);
    else setVariant(VARIANT.contained);
  };
  return (
    <div className="px-5">
      <div className="flex flex-row justify-between">
        <h1 className=" text-xl font-bold">List your brand: </h1>
        <Button
          variant={variant}
          startIcon={<FilterIcon />}
          onClick={handleButtonFilter}
        >
          Filter
        </Button>
      </div>
      {variant === VARIANT.contained ? <div></div> : <FiltersBrand />}
      <div className="my-10 pl-10 border flex flex-row bg-gradient-to-r from-[#ffafbd] to-[#ffc3a0] rounded-2xl shadow-lg">
        {DataBrand.length === 0 ? (
          <h1 className=" text-xl uppercase">you don't have a brand</h1>
        ) : (
          <div className="flex flex-row flex-wrap justify-start w-full">
              {DataBrand.map((data) => (
                <Link
                  to={`/brand-detail/${data.id}`}
                  className="w-[20%] min-h-[320px] max-h-[400px] border rounded-2xl shadow-xl my-5 mx-5 bg-white hover:scale-105"
                >
                  <div className="flex justify-center">
                    <h1 className=" text-base font-bold my-2">{data.name}</h1>
                  </div>
                  <Divider />
                  <div className="flex flex-col">
                    <img
                      src={data.img}
                      alt="Anh brand"
                      className="w-full max-h-[200px] p-2"
                    />
                    <div className="mt-4">
                      <Divider />
                    </div>
                    <div className="flex justify-center">
                      <h1 className=" text-base text-[#B1B5B5] items-center">
                        Create at: {data.createAt}
                      </h1>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Pagination count={10} showFirstButton showLastButton />
      </div>
    </div>
  );
};