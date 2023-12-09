"use client";

import { getUser } from "@/api/user";
import { AuthContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const ProfilingLayout = ({ children }) => {
  const router = useRouter();
  const [loading, setloading] = useState(true);

  const { currentUser } = useContext(AuthContext);

  return currentUser ? <>{children}</> : router.push("/login");

  // useEffect(() => {
  //   getUser()
  //     .then((res) => {
  //       setloading(false);
  //     })
  //     .catch((err) => {
  //       router.push("/login");
  //     });
  // }, []);

  return loading ? null : <>{children}</>;
};

export default ProfilingLayout;
