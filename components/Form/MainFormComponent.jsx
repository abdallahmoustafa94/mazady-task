import React, { useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";
import Dropdown from "./Dropdown";
import PropertyDropdown from "./PropertyDropdown";

const MainFormComponent = () => {
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});
  const [showTable, setShowTable] = useState(false);

  const { data: mainCategories } = useAxios(
    "https://staging.mazaady.com/api/v1/get_all_cats"
  );

  const { data: properties } = useAxios(
    selectedSubCategory
      ? "https://staging.mazaady.com/api/v1/properties?cat=" +
          selectedSubCategory.value
      : ""
  );

  const handlePropertySelect = async (property, selectedOption) => {
    setSelectedValues((prev) => ({
      ...prev,
      "Main Category": selectedMainCategory?.label,
      Subcategory: selectedSubCategory?.label,
      ...(property ? { [property.name]: selectedOption?.label } : {}),
    }));
  };

  useEffect(() => {
    if (!mainCategories) {
      setSelectedMainCategory(null);
    }
  }, [mainCategories]);

  useEffect(() => {
    if (!properties) {
      setSelectedValues({});
    }
  }, [properties]);

  const renderSelectedData = () => {
    return (
      <table className="mt-4 w-full border">
        <tbody>
          {Object?.entries(selectedValues).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="py-2 px-4 border-r font-semibold">{key}</td>
              <td className="py-2 px-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleShowTable = () => {
    setShowTable(true);
    const selectedData = {
      "Main Category": selectedMainCategory?.label,
      Subcategory: selectedSubCategory?.label,
      ...selectedValues,
    };

    setSelectedValues(selectedData);
  };

  const handleBackToForm = () => {
    setShowTable(false);
    setSelectedValues({});
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div
        className={`w-full lg:w-[50%] bg-white p-8 rounded shadow-lg ${
          showTable ? "hidden" : "block"
        }`}
      >
        <Dropdown
          options={
            mainCategories
              ? mainCategories.data.categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                  children: category.children,
                }))
              : []
          }
          onChange={(selectedOption) => setSelectedMainCategory(selectedOption)}
          value={selectedMainCategory}
          placeholder="Select Main Category"
          className="mb-4"
        />

        <Dropdown
          options={
            selectedMainCategory
              ? selectedMainCategory?.children?.map((child) => ({
                  value: child.id,
                  label: child.name,
                }))
              : []
          }
          onChange={(selectedOption) => {
            setSelectedSubCategory(selectedOption);
          }}
          value={selectedSubCategory}
          placeholder="Select Subcategory"
          className="mb-4"
        />

        {properties &&
          properties?.data?.map((property) => (
            <PropertyDropdown
              key={property.id}
              property={property}
              onSelect={(selectedOption) =>
                handlePropertySelect(property, selectedOption)
              }
            />
          ))}

        <button
          onClick={handleShowTable}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </div>

      {showTable && (
        <div
          className={`lg:w-[50%] bg-white p-8 rounded shadow-lg ${
            showTable ? "block" : "hidden"
          }`}
        >
          {renderSelectedData()}
          <button
            onClick={handleBackToForm}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
};

export default MainFormComponent;
