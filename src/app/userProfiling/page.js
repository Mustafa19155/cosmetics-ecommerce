import EarnCoins from "@/components/UserProfiling/EarnCoins";
import ProfilingTop from "@/components/UserProfiling/ProfilingTop";
import React from "react";

const Page = () => {
  return (
    <div className="my-16">
      <ProfilingTop />
      <div>
        <EarnCoins />
      </div>
    </div>
  );
};

export default Page;
