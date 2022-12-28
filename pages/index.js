import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, getData } = useFetch("/api/get-all-users");

  const [filter, setFilter] = useState(0);

  const filters = ["All Users", "Approved Users", "Unapproved Users"];
  const headings = ["Id", "Email", "Full Name", "Mobile", "Status", ""];

  const approveUser = async (id) => {
    const res = await fetch("/api/approve-user", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ id: id }),
    });

    if (res.status === 200) getData();
  };

  const disApproveUser = async (id) => {
    const res = await fetch("/api/disapprove-user", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ id: id }),
    });

    if (res.status === 200) getData();
  };

  return (
    <>
      <Head>
        <title>Home Services</title>
      </Head>
      <div className="bg-slate-700 py-4 px-8 shadow-md">
        <div>
          <p className="text-white text-2xl font-bold">Home Services</p>
        </div>
      </div>
      <div className="py-4 px-8">
        <div className="grid grid-cols-12 gap-8">
          <div className=" col-span-2">
            <div className="bg-slate-100 px-4 py-2">
              <p className="mb-4 text-center text-lg font-bold">Filter</p>
              <ul className="flex flex-col gap-y-1">
                {filters.map((item, index) => (
                  <li>
                    <MenuItem
                      selected={index === filter}
                      onClick={() => setFilter(index)}
                    >
                      {item}
                    </MenuItem>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" col-span-10">
            <table className=" table-fixed w-full text-center">
              <thead className="bg-slate-500 text-slate-200">
                <tr>
                  {headings.map((item) => (
                    <TableHeading>{item}</TableHeading>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
                    }`}
                  >
                    <TableData>{item.id}</TableData>
                    <TableData>{item.email}</TableData>
                    <TableData>{`${item.firstname} ${item.lastname}`}</TableData>
                    <TableData>{item.mobile}</TableData>
                    <TableData>
                      {item.isApproved ? "Approved" : "Unapproved"}
                    </TableData>
                    <TableData>
                      <div className="flex flex-col gap-y-2 justify-evenly">
                        <ApproveButton
                          onClick={() => {
                            approveUser(item.id);
                          }}
                        />
                        <DissapproveButton
                          onClick={() => {
                            disApproveUser(item.id);
                          }}
                        />
                      </div>
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

/*-------------------Custom Components-----------------------*/

const MenuItem = ({ selected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`
      hover:opacity-80
      ${selected && "underline"}
      font-semibold
      `}
    >
      {children}
    </button>
  );
};

const TableHeading = ({ children }) => {
  return <th>{children}</th>;
};

const TableData = ({ children }) => {
  return <td className="px-2 py-2 truncate">{children}</td>;
};

const ApproveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
      outline-green-600 
      text-green-700 
      hover:text-white 
      hover:bg-green-600
      outline 
      outline-1 
      px-3 py-1 
      rounded-full 
      transition
      `}
    >
      Approve
    </button>
  );
};

const DissapproveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
      outline-red-600 
      text-red-700 
      hover:text-white 
      hover:bg-red-600 
      outline 
      outline-1 
      px-3 py-1 
      rounded-full 
      transition
      `}
    >
      Dissapprove
    </button>
  );
};

/*-------------------Custom Hooks-----------------------*/

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (controller = {}) => {
    setLoading(true);

    const res = await fetch(url, { signal: controller.signal, ...options });

    if (!res.ok) return;

    const data = await res.json();

    setData(data);

    setLoading(false);
  };

  useEffect(() => {
    const controller = new AbortController();

    getData(controller);

    return () => {
      controller.abort();
    };
  }, []);

  return { data, loading, getData };
};
