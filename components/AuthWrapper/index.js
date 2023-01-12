import React, { useEffect, useState } from "react";

export const AuthWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) localStorage.setItem("user", false);

    setLoading(false);
  });

  if (loading) return <></>;

  return <>{children}</>;
};
