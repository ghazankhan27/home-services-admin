import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { TableData } from "../TableData";
import { TableHeading } from "../TableHeading";
import { CategoryForm } from "./Components/CategoryForm";
import { CategoryTable } from "./Components/CategoryTable";

export const CategoriesList = () => {
  const { data, getData, error } = useFetch("/api/get-all-categories");

  const [submitError, setSubmitError] = useState("");

  return (
    <div className="grid grid-cols-2 gap-x-8">
      <div className="border-r pr-4">
        <CategoryTable submitError={submitError} data={data} error={error} />
      </div>
      <div>
        <CategoryForm setError={setSubmitError} getData={getData} />
      </div>
    </div>
  );
};
