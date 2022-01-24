import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SignInUp from "../services/SignInUp";
import ViewCategory from "./ViewCategory";

const ViewAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    SignInUp.getAllCategories()
      .then((response) => {
        setCategories(response.data);
        toast.success("Fetched all the available categories!", {
          position: "top-center",
          autoClose: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Connection may be lost with database...", {
          position: "top-center",
          autoClose: 1500,
        });
      });
  }, []);

  return (
    <div className="mb-5">
      <h3 className="text-center mb-3">List of all the available categories</h3>
      {categories.length > 0
        ? categories.map((category) => (
            <ViewCategory key={category} category={category} />
          ))
        : "No more records to show..."}
    </div>
  );
};

export default ViewAllCategories;
