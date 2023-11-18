"use client";
import LatestOrders from "@/components/admin/dashboard/LatestOrders";
import TopProducts from "@/components/admin/dashboard/TopProducts";
import React, { useEffect } from "react";
import BestSellersTable from "@/components/admin/Tables/BestSellersTable";
import YearlyReport from "@/components/admin/dashboard/YearlyReport";
import MainStats from "@/components/admin/dashboard/MainStats";
import { getDashboardStats } from "@/api/dashboard";
import { useState } from "react";

const Page = () => {
  const [data, setdata] = useState(null);
  const [topPros, settopPros] = useState(null);
  const [totalSales, settotalSales] = useState(null);

  const colors = ["#EA5455", "#7367F0", "#FF9F43"];

  const [adjustedData, setadjustedData] = useState([
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
  ]);

  const getData = async () => {
    setdata(await getDashboardStats());
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
    if (data) {
      const adjustedDataCopy = [...adjustedData];
      data.graph.forEach((entry) => {
        const monthIndex = entry._id - 1;
        if (monthIndex >= 0 && monthIndex < adjustedData.length) {
          adjustedDataCopy[monthIndex].totalRevenue = entry.totalRevenue;
        }
      });
      setadjustedData(adjustedDataCopy);
      settopPros(
        data.pieChartData.map((da) => {
          return {
            name: da._doc.name,
            totalPrice: da.totalPrice,
          };
        })
      );
    }
  }, [data]);

  useEffect(() => {
    if (topPros) {
      settotalSales(
        topPros.reduce((acc, currVal) => acc + currVal.totalPrice, 0)
      );
    }
  }, [topPros]);

  return (
    <div>
      {data && topPros && totalSales && (
        <>
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
                <p className="font-bold text-lg mb-5 text-center">
                  Top 3 Products
                </p>
                <div className="flex items-center justify-center flex-wrap">
                  <TopProducts data={topPros} colors={colors} />
                  <div className="flex flex-col gap-5">
                    {topPros.map((pro, index) => (
                      <div className="flex gap-3 items-center text-sm whitespace-nowrap">
                        <p
                          className={`h-2 w-2 rounded-full`}
                          style={{ background: colors[index] }}
                        />
                        <p className="text-secondary truncate w-[80px]">
                          {pro.name}
                        </p>
                        <p>€{pro.totalPrice}</p>
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
            <LatestOrders />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
