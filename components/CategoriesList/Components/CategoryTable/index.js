import React from "react";
import { TableData } from "../../../TableData";
import { TableHeading } from "../../../TableHeading";

export const CategoryTable = ({ data, error, submitError }) => {
  return (
    <>
      <p className="font-bold text-xl mb-8">All Categories</p>
      {error && (
        <p className="text-red-600 font-semibold text-lg">{submitError}</p>
      )}
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-blue-400 text-blue-50">
            <TableHeading>Name</TableHeading>
            <TableHeading>Subcategories</TableHeading>
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
            data.map((item, index) => (
              <tr className={`${index % 2 !== 0 && "bg-blue-50"}`}>
                <TableData>{item.name}</TableData>
                <TableData>
                  {item.subcategories?.map((_item, index) => {
                    if (index === item.subcategories?.length - 1)
                      return <span key={index}>{_item.name}</span>;
                    return <span key={index}>{_item.name}, </span>;
                  })}
                </TableData>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
