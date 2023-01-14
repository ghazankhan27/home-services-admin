import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const navigation = useRouter();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  async function checkUser() {
    let user = localStorage.getItem("user");

    if (!user) {
      localStorage.setItem("user", false);
      user = localStorage.getItem("user");
    }

    const loggedIn = user === "true" ? true : false;

    if (!loggedIn) {
      setUser(false);
      if (await navigation.replace("/login")) setLoading(false);
    } else {
      setUser(true);
      if (await navigation.replace("/")) setLoading(false);
    }
  }

  useEffect(() => {
    checkUser();
  }, [user]);

  return { user, loading, setUser };
};
