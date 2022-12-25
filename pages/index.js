import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const { data } = useFetch("/api/get-all-users");

  return (
    <>
      <Head>
        <title>Home Services</title>
      </Head>
      <div className="bg-orange-400 text-black text-2xl font-bold py-4 px-8 shadow-md">
        <div>Home Services</div>
      </div>
      <div className="py-4 px-8">
        <div className="grid grid-cols-4 gap-8">
          <div className=" col-span-1">
            <div className="bg-orange-200">
              <ul>
                <li>All Users</li>
                <li>Approved Users</li>
                <li>Unapproved Users</li>
              </ul>
            </div>
          </div>
          <div className=" col-span-3">
            <table className=" table-fixed w-full text-center">
              <thead className="bg-orange-400">
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) =>
                  index % 2 === 0 ? (
                    <tr className="bg-orange-100">
                      <td>{item.uid}</td>
                      <td>{item.email}</td>
                    </tr>
                  ) : (
                    <tr className="bg-orange-200">
                      <td>{item.uid}</td>
                      <td>{item.email}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      setLoading(true);

      const res = await fetch(url, { signal: controller.signal });

      if (!res.ok) return;

      const data = await res.json();

      setData(data);

      setLoading(false);
    };

    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading };
};
