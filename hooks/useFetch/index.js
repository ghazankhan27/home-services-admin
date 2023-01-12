import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (controller = {}) => {
    try {
      setError(false);
      setLoading(true);

      const res = await fetch(url, { signal: controller.signal, ...options });

      if (!res.ok) throw Error("Problem getting data");

      const data = await res.json();

      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getData(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading, error, getData, setLoading };
};
