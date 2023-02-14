import React from 'react';
import { Field, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const ReusableForm = ({ fields, initialValues, validationSchema, onSubmit }) => {
  
  let navigate = useNavigate()

  const home = () => {
    navigate('/')
  }
  
  return(
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm(initialValues);
      }}
    >
      {({ handleSubmit }) => (
        <form className="bg-white p-6 w-72 rounded-lg shadow-md" onSubmit={handleSubmit}>
          {fields.map(field => (
            <div key={field.name}>
              <label className="block font-medium" htmlFor={field.name}>{field.label}</label>
              <Field className="border border-gray-400 p-2 w-full" name={field.name} type={field.type} />
            </div>
          ))}
          <button onClick={home} className="mx-1 bg-blue-500 text-white py-1.5 px-3 mt-3 rounded hover:bg-blue-700" type="submit">Cancel</button>
          <button className="mx-1 bg-blue-500 text-white py-1.5 px-3 mt-3 rounded hover:bg-blue-700" type="submit">Submit</button>
        </form>
      )}
    </Formik>
)};

export default ReusableForm;



