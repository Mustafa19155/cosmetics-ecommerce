import React from "react";
import OrangeChart from "@/assets/icons/dashboard-charts/chart1.svg";
import RedChart from "@/assets/icons/dashboard-charts/chart2.svg";
import GreenChart from "@/assets/icons/dashboard-charts/chart3.svg";
import Image from "next/image";

const MainStats = ({ data }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <div className="shadow-dashboard-card flex p-6 rounded-lg w-full md:w-[49.5%] xl:w-[24.5%] justify-between">
          <div className="flex flex-col justify-end gap-3">
            <p className="text-sm text-secondary">Total Earning</p>
            <p className="text-2xl font-bold">${data.earnings.value}</p>
          </div>
          <div className="flex flex-col items-end justify-end gap-3">
            <p
              className={`text-sm ${
                data.earnings.profit < 0
                  ? "text-[red]"
                  : data.earnings.profit > 25
                  ? "text-green-500"
                  : "text-orange-400"
              }`}
            >
              {data.earnings.profit > 0 ? "+" : ""}
              {data.earnings.profit}%
            </p>
            <Image
              src={
                data.earnings.profit < 0
                  ? RedChart
                  : data.earnings.profit > 25
                  ? GreenChart
                  : OrangeChart
              }
            />
          </div>
        </div>
        <div className="shadow-dashboard-card flex p-6 rounded-lg w-full md:w-[49.5%] xl:w-[24.5%] justify-between">
          <div className="flex flex-col justify-end gap-3">
            <p className="text-sm text-secondary">Total Products Sold</p>
            <p className="text-2xl font-bold">${data.productsSold.value}</p>
          </div>
          <div className="flex flex-col items-end justify-end gap-3">
            <p
              className={`text-sm ${
                data.productsSold.profit < 0
                  ? "text-[red]"
                  : data.productsSold.profit > 25
                  ? "text-green-500"
                  : "text-orange-400"
              }`}
            >
              {data.productsSold.profit > 0 ? "+" : ""}
              {data.productsSold.profit}%
            </p>
            <Image
              src={
                data.productsSold.profit < 0
                  ? RedChart
                  : data.productsSold.profit > 25
                  ? GreenChart
                  : OrangeChart
              }
            />
          </div>
        </div>
        <div className="shadow-dashboard-card flex p-6 rounded-lg w-full md:w-[49.5%] xl:w-[24.5%] justify-between">
          <div className="flex flex-col justify-end gap-3">
            <p className="text-sm text-secondary">Users</p>
            <p className="text-2xl font-bold">${data.users.value}</p>
          </div>
          <div className="flex flex-col items-end justify-end gap-3">
            <p
              className={`text-sm ${
                data.users.profit < 0
                  ? "text-[red]"
                  : data.users.profit > 25
                  ? "text-green-500"
                  : "text-orange-400"
              }`}
            >
              {data.users.profit > 0 ? "+" : ""}
              {data.users.profit}%
            </p>
            <Image
              src={
                data.users.profit < 0
                  ? RedChart
                  : data.users.profit > 25
                  ? GreenChart
                  : OrangeChart
              }
            />
          </div>
        </div>
        <div className="shadow-dashboard-card flex p-6 rounded-lg w-full md:w-[49.5%] xl:w-[24.5%] justify-between">
          <div className="flex flex-col justify-end gap-3">
            <p className="text-sm text-secondary">Orders in queue</p>
            <p className="text-2xl font-bold">${data.ordersInQueue.value}</p>
          </div>
          <div className="flex flex-col items-end justify-end gap-3">
            <p
              className={`text-sm ${
                data.ordersInQueue.profit < 0
                  ? "text-[red]"
                  : data.ordersInQueue.profit > 25
                  ? "text-green-500"
                  : "text-orange-400"
              }`}
            >
              {data.ordersInQueue.profit > 0 ? "+" : ""}
              {data.ordersInQueue.profit}%
            </p>
            <Image
              src={
                data.ordersInQueue.profit < 0
                  ? RedChart
                  : data.ordersInQueue.profit > 25
                  ? GreenChart
                  : OrangeChart
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStats;
