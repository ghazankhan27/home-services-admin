import Head from "next/head";
import { useState } from "react";
import { FilterMenu } from "../components/FilterMenu";
import { Loader } from "../components/Loader";
import { UsersList } from "../components/UsersList";
import { useFetch } from "../hooks/useFetch";
import { useLogin } from "../hooks/useLogin";

export default function Home() {
  const { data, error, loading, getData, setLoading } =
    useFetch("/api/get-all-users");
  const { loading: _loading, setUser } = useLogin();

  const [filter, setFilter] = useState(0);

  const filters = [
    { id: 0, name: "All Users" },
    { id: 1, name: "Approved Users", isApproved: true },
    { id: 2, name: "Unapproved Users", isApproved: false },
  ];

  const headings = ["Id", "Email", "Full Name", "Mobile", "Status", ""];

  if (_loading) return <></>;

  return (
    <>
      <Head>
        <title>Home | Home Services</title>
      </Head>
      <div className="py-4 px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2">
            <FilterMenu
              filters={filters}
              setFilter={setFilter}
              selected={filter}
              setUser={setUser}
            />
          </div>
          <div className="col-span-10">
            {error && (
              <p className="mb-4 text-red-600 font-semibold text-lg">
                There was a problem fetching the data
              </p>
            )}
            <UsersList
              loading={loading}
              headings={headings}
              data={
                filter === 0
                  ? data
                  : data.filter(
                      (item) => item.isApproved === filters[filter].isApproved
                    )
              }
              getData={getData}
              setLoading={setLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}
