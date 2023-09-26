import LatestOrders from "@/components/admin/dashboard/LatestOrders";
import TopProducts from "@/components/admin/dashboard/TopProducts";
import React from "react";
import BestSellerImg from "@/assets/images/home/perfumes.png";
import BestSellersTable from "@/components/admin/Tables/BestSellersTable";
import YearlyReport from "@/components/admin/dashboard/YearlyReport";
import MainStats from "@/components/admin/dashboard/MainStats";

const getOrders = async () => {
  return [
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
  ];
};

const getTopProsData = async () => {
  return [
    { name: "Product 1", sales: 830 },
    { name: "Product 2", sales: 550 },
    { name: "Product 3", sales: 755 },
  ];
};

const getBestSellers = async () => {
  return [
    {
      image: BestSellerImg,
      name: "Product Name",
      price: 22.2,
      sold: 20,
      profit: 1800.2,
    },
    {
      image: BestSellerImg,
      name: "Product Name",
      price: 22.2,
      sold: 20,
      profit: 1800.2,
    },
    {
      image: BestSellerImg,
      name: "Product Name",
      price: 22.2,
      sold: 20,
      profit: 1800.2,
    },
    {
      image: BestSellerImg,
      name: "Product Name",
      price: 22.2,
      sold: 20,
      profit: 1800.2,
    },
  ];
};

const getYearlyReport = async () => {
  return [
    {
      month: "January",
      sales: 500,
    },
    {
      month: "February",
      sales: 550,
    },
    {
      month: "March",
      sales: 600,
    },
    {
      month: "April",
      sales: 400,
    },
    {
      month: "May",
      sales: 300,
    },
    {
      month: "June",
      sales: 400,
    },
    {
      month: "July",
      sales: 800,
    },
    {
      month: "August",
      sales: 300,
    },
    {
      month: "September",
      sales: 330,
    },
    {
      month: "October",
      sales: 290,
    },
    {
      month: "November",
      sales: 900,
    },
    {
      month: "December",
      sales: 500,
    },
  ];
};

const getMainStats = async () => {
  return {
    earnings: {
      value: 744,
      profit: 25,
    },
    productsSold: {
      value: 800,
      profit: -25,
    },
    users: {
      value: 25,
      profit: 49,
    },
    ordersInQueue: {
      value: 10,
      profit: 10,
    },
  };
};

const Page = async () => {
  const orders = await getOrders();
  const topPros = await getTopProsData();
  const bestSellers = await getBestSellers();
  const yearlyReport = await getYearlyReport();
  const mainData = await getMainStats();

  const colors = ["#EA5455", "#7367F0", "#FF9F43"];

  const totalSales = topPros.reduce((acc, currVal) => acc + currVal.sales, 0);

  return (
    <div className="bg-white">
      <p className="font-bold text-3xl mb-8">Dashboard</p>
      <MainStats data={mainData} />
      <div className="bg-white shadow-dashboard-card rounded-lg p-10 my-10 hidden sm:block">
        <p className="font-bold text-2xl mb-8">Yearly Revenue Report</p>
        <div className="flex items-center">
          <YearlyReport data={yearlyReport} />
        </div>
      </div>

      <div className="flex flex-wrap justify-between mb-10">
        <div className="bg-white w-full xl:w-[49.5%] shadow-dashboard-card rounded-lg p-5">
          <p className="font-bold text-lg mb-5 text-center">Top 3 Products</p>
          <div className="flex items-center justify-center flex-wrap">
            <TopProducts data={topPros} colors={colors} />
            <div className="flex flex-col gap-5">
              {topPros.map((pro, index) => (
                <div className="flex gap-3 items-center text-sm whitespace-nowrap">
                  <p
                    className={`h-2 w-2 rounded-full`}
                    style={{ background: colors[index] }}
                  />
                  <p className="text-secondary">{pro.name}</p>
                  <p>${pro.sales}</p>
                  <p className="text-secondary">
                    {((pro.sales / totalSales) * 100).toFixed(1)}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-dashboard-card rounded-lg p-5 w-full xl:w-[49.5%] max-w-[calc(100vw_-_90px)] mt-8 lg:mt-0">
          <p className="font-bold text-lg mb-5">Bestsellers</p>
          <BestSellersTable data={bestSellers} />
        </div>
      </div>
      <LatestOrders orders={orders} />
    </div>
  );
};

export default Page;
