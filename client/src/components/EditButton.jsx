import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const EditButton = ({ id }) => {

    let navigate = useNavigate()

    const edit = async () => {
        try {
            navigate(`/edit/${id}`);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <button className="bg-emerald-600 text-white py-1 px-2 rounded hover:bg-emerald-800 mx-1 " onClick={edit}>
          Edit
        </button>
  )
}

export default EditButton