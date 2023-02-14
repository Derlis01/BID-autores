import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButtom from './DeleteButton';
import EditButton from './EditButton';

const DataTable = ({ data, update }) => {

  return (
    <table>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr className="bg-emerald-800 text-white">
          <th className="px-6 py-3">Autor</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td className="border px-4 py-2">
              <Link to={`/edit/${item._id}`} className="underline">
                {item.name}
              </Link>
            </td>
            <td className="border px-4 py-2">
              <EditButton id={item._id} className="inline-block mr-4" />
              <DeleteButtom id={item._id} update={update} className="inline-block" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;