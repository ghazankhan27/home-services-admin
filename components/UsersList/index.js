import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { TableData } from "../TableData";
import { TableHeading } from "../TableHeading";
import { ApproveButton } from "./Components/ApproveButton";
import { DisApproveButton } from "./Components/DisApproveButton";
import { approveUser } from "./Services/approveUser";
import { disApproveUser } from "./Services/disApproveUser";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { FilterMenu } from "../FilterMenu";

export const UsersList = () => {
  const { data, error, loading, getData } = useFetch("/api/get-all-users");

  const [loadingItem, setLoadingItem] = useState(-1);
  const [filter, setFilter] = useState(0);

  const headings = ["Id", "Email", "Full Name", "Mobile", "Status", ""];

  const filters = [
    { id: 0, name: "All Users" },
    { id: 1, name: "Approved Users", isApproved: true },
    { id: 2, name: "Unapproved Users", isApproved: false },
  ];

  return (
    <div className="relative grid">
      <p className="font-bold text-xl mb-8">{filters[filter].name}</p>
      {error && (
        <p className="text-red-600 font-semibold text-lg">
          There was a problem fetching the data
        </p>
      )}
      <FilterMenu selected={filter} setFilter={setFilter} filters={filters} />
      <table className="table-fixed w-full text-center">
        <thead className="bg-slate-500 text-slate-200">
          <tr>
            {headings.map((item, index) => (
              <TableHeading key={index}>{item}</TableHeading>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length <= 0 && (
            <tr>
              <td className="py-4 font-bold text-lg" colSpan={6}>
                Nothing to show here
              </td>
            </tr>
          )}
          {data &&
            (filter === 0
              ? data
              : data.filter(
                  (item) => item.isApproved === filters[filter].isApproved
                )
            ).map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"
                }`}
              >
                <TableData>{item.id}</TableData>
                <TableData>{item.email}</TableData>
                <TableData>{`${item.firstname} ${item.lastname}`}</TableData>
                <TableData>{item.mobile}</TableData>
                <TableData>
                  {item.isApproved ? (
                    <p className="flex items-center gap-x-2 justify-center">
                      Approved
                      <BsFillCheckCircleFill className="text-green-600" />
                    </p>
                  ) : (
                    <p className="flex items-center gap-x-2 justify-center">
                      Unapproved <TiDelete size={24} className="text-red-600" />
                    </p>
                  )}
                </TableData>
                <TableData>
                  <div className="flex flex-col gap-y-2 justify-evenly items-center">
                    {item.isApproved ? (
                      <DisApproveButton
                        loading={loadingItem === item.id}
                        onClick={async () => {
                          setLoadingItem(item.id);
                          const res = await disApproveUser(item.id);
                          if (res) {
                            getData().then(() => setLoadingItem(-1));
                          } else {
                            setLoadingItem(-1);
                          }
                        }}
                      />
                    ) : (
                      <ApproveButton
                        loading={loadingItem === item.id}
                        onClick={async () => {
                          setLoadingItem(item.id);
                          const res = await approveUser(item.id);
                          if (res) {
                            getData().then(() => setLoadingItem(-1));
                          } else {
                            setLoadingItem(-1);
                          }
                        }}
                      />
                    )}
                  </div>
                </TableData>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
