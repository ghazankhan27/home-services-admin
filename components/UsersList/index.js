import React from "react";
import { Loader } from "../Loader";
import { TableData } from "../TableData";
import { TableHeading } from "../TableHeading";
import { ApproveButton } from "./Components/ApproveButton";
import { DisApproveButton } from "./Components/DisApproveButton";
import { approveUser } from "./Services/approveUser";
import { disApproveUser } from "./Services/disApproveUser";

export const UsersList = ({ headings, data, getData, loading, setLoading }) => {
  return (
    <div className="relative pt-8">
      {loading && (
        <div className="absolute top-0 right-16">
          <Loader />
        </div>
      )}
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
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}`}
            >
              <TableData>{item.id}</TableData>
              <TableData>{item.email}</TableData>
              <TableData>{`${item.firstname} ${item.lastname}`}</TableData>
              <TableData>{item.mobile}</TableData>
              <TableData>
                {item.isApproved ? "Approved" : "Unapproved"}
              </TableData>
              <TableData>
                <div className="flex flex-col gap-y-2 justify-evenly items-center">
                  <ApproveButton
                    disabled={loading}
                    onClick={async () => {
                      setLoading(true);
                      const res = await approveUser(item.id);
                      if (res) getData();
                    }}
                  />
                  <DisApproveButton
                    disabled={loading}
                    onClick={async () => {
                      setLoading(true);
                      const res = await disApproveUser(item.id);
                      if (res) getData();
                    }}
                  />
                </div>
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
