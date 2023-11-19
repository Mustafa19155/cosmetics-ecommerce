"use client";

import { getUser } from "@/api/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilingLayout = ({ children }) => {
  const router = useRouter();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getUser()
      .then((res) => {
        setloading(false);
      })
      .catch((err) => {
        router.push("/login");
      });
  }, []);

  return loading ? null : <>{children}</>;
};

export default ProfilingLayout;
