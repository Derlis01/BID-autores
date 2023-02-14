import React, { useState } from "react";
import ReusableForm from "../../components/ReusableForm";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const fields = [{ name: "name", label: "name", type: "text" }];

const initialValues = {
  name: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const AddAutor = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const sendAuthor = async (values) => {
    try {
      await axios.post(`http://localhost:8000/post`, {
        name: values.name,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  return (
    <div>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        to={"/"}
      >
        Home
      </Link>
      <p className="mt-5">Add a new author:</p>
      <ReusableForm
        fields={fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          sendAuthor(values);
        }}
      />
      {error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {error.response.data.error.errors.name.message}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddAutor;
