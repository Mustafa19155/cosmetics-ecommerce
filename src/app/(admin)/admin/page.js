import LatestOrders from "@/components/admin/dashboard/LatestOrders";
import TopProducts from "@/components/admin/dashboard/TopProducts";
import React from "react";
import BestSellerImg from "@/assets/images/home/perfumes.png";
import BestSellersTable from "@/components/admin/Tables/BestSellersTable";
import YearlyReport from "@/components/admin/dashboard/YearlyReport";
import MainStats from "@/components/admin/dashboard/MainStats";
import { redirect } from "next/navigation";
import { getDashboardStats } from "@/api/dashboard";

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
    { name: "Product 1", totalPrice: 830 },
    { name: "Product 2", totalPrice: 550 },
    { name: "Product 3", totalPrice: 755 },
  ];
};

const Page = async () => {
  const orders = await getOrders();

  const colors = ["#EA5455", "#7367F0", "#FF9F43"];

  const data = await getDashboardStats();

  const adjustedData = [
    { month: "January", totalRevenue: 0 },
    { month: "February", totalRevenue: 0 },
    { month: "March", totalRevenue: 0 },
    { month: "April", totalRevenue: 0 },
    { month: "May", totalRevenue: 0 },
    { month: "June", totalRevenue: 0 },
    { month: "July", totalRevenue: 0 },
    { month: "August", totalRevenue: 0 },
    { month: "September", totalRevenue: 0 },
    { month: "October", totalRevenue: 0 },
    { month: "November", totalRevenue: 0 },
    { month: "December", totalRevenue: 0 },
  ];

  data.graph.forEach((entry) => {
    const monthIndex = entry._id - 1;
    if (monthIndex >= 0 && monthIndex < adjustedData.length) {
      adjustedData[monthIndex].totalRevenue = entry.totalRevenue;
    }
  });

  const topPros = data.pieChartData.map((da) => {
    return {
      name: da._doc.name,
      totalPrice: da.totalPrice,
    };
  });

  const totalSales = topPros.reduce(
    (acc, currVal) => acc + currVal.totalPrice,
    0
  );

  return (
    <div className="bg-white">
      <p className="font-bold text-3xl mb-8">Dashboard</p>
      <MainStats
        totalUsers={data.users}
        ordersInQueue={data.ordersInQueu}
        totalEarnings={data.totalRevenue}
        totalProductsSold={data.totalProductsSold}
      />
      <div className="bg-white shadow-dashboard-card rounded-lg p-10 my-10 hidden sm:block">
        <p className="font-bold text-2xl mb-8">Yearly Revenue Report</p>
        <div className="flex items-center">
          <YearlyReport data={adjustedData} />
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
                  <p className="text-secondary truncate w-[80px]">{pro.name}</p>
                  <p>${pro.totalPrice}</p>
                  <p className="text-secondary">
                    {((pro.totalPrice / totalSales) * 100).toFixed(1)}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-dashboard-card rounded-lg p-5 w-full xl:w-[49.5%] max-w-[calc(100vw_-_90px)] mt-8 lg:mt-0">
          <p className="font-bold text-lg mb-5">Bestsellers</p>
          <BestSellersTable data={data.products} />
        </div>
      </div>
      <LatestOrders orders={orders} />
    </div>
  );
};

export default Page;
