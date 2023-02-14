import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DataTable from '../components/DataTable'
import axios from 'axios'

const Home = () => {

  const [author, setAuthor] = useState([])
  const [updated, setUpdated] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://localhost:8000/get');
      setAuthor(res.data);
    }
    fetchData();
    
  }, [updated])

  const updateTable = () => {
    setUpdated(updated + 1)
  }
  

  return (
    <div>
        <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to={'add'}>Add Autor</Link>
        <p className='mt-7 mb-5'>We have quotes by:</p>
        <DataTable data={author} update={updateTable} />
    </div>
  )
}

export default Home