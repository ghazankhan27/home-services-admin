import React from "react";

export const InputField = ({ label, options }) => {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-600">{label}</p>
      <input
        style={{ width: 220 }}
        className={`
        focus:outline-2
        focus:outline-blue-500
        outline 
        outline-1 
        outline-gray-400 
        rounded 
        px-1 py-0.5`}
        {...options}
      />
    </div>
  );
};
