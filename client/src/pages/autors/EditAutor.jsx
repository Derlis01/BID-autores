import React, { useEffect, useState } from "react";
import ReusableForm from "../../components/ReusableForm";
import * as Yup from "yup";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const fields = [{ name: "name", label: "name", type: "text" }];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const EditAutor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:8000/get/${id}`);
      setAuthor(res.data);
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const initialValues = {
    name: author.name,
  };

  const sendUpdate = async (values) => {
    try {
      const res = await axios.put(`http://localhost:8000/edit/${id}`, {
        name: values.name
      });
      console.log(res.data);
      navigate('/')
    } catch (error) {
      setError(error);
      console.error(error);
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
      <p className="mt-5">Edit a new author:</p>
      {!loading && (
        <ReusableForm
          fields={fields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            sendUpdate(values);
          }}
        />
      )}
      {error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {error.response.data.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditAutor;
