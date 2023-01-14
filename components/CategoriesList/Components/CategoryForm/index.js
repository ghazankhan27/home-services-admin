import { addCategory } from "../../Services/addCategory";
import { InputField } from "../../../InputField";
import { useState } from "react";
import { AddSubcategoryButton } from "./Components/AddSubcategoryButton/AddSubcategoryButton";
import { DeleteSubcategoryButton } from "./Components/DeleteSubcategoryButton";
import { SubmitButton } from "./Components/SubmitButton";

export const CategoryForm = ({ getData, setError }) => {
  const [loading, setLoading] = useState(false);
  const [listOfSubs, setListOfSubs] = useState([]);

  return (
    <>
      <p className="font-bold text-xl mb-8">Add new category</p>
      <form
        className="grid gap-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          setLoading(true);
          const res = await addCategory(data);
          if (res) await getData();
          else {
            setError("There was a problem adding category");
          }
          e.target.reset();
          setLoading(false);
          setError("");
        }}
      >
        <div className="flex items-center">
          <InputField
            label="Category Name"
            options={{ type: "text", required: true, name: "Category" }}
          />
        </div>
        <div className="grid gap-y-2 pl-4 ml-4 py-1 pb-4 border-slate-200 border-l-2">
          <div className="flex items-center gap-x-2">
            <p className="font-bold text-slate-600">Subcategories</p>
            <AddSubcategoryButton setListOfSubs={setListOfSubs} />
          </div>
          {listOfSubs.length > 0 &&
            listOfSubs.map((item, index) => (
              <div className="flex items-center gap-x-2">
                <InputField
                  options={{
                    type: "text",
                    required: true,
                    name: `Subcategory${index}`,
                  }}
                  label={`Subcategory ${index + 1}`}
                />
                <DeleteSubcategoryButton
                  index={index}
                  setListOfSubs={setListOfSubs}
                />
              </div>
            ))}
        </div>
        <SubmitButton loading={loading} />
      </form>
    </>
  );
};
