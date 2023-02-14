import React from 'react'
import { Link } from 'react-router-dom'
//import { useRouteError } from 'react-router-dom'

const NotFound = () => {

    //const error = useRouteError()

  return (
    <div className='text-center'>
      <h1 className='text-3xl'>No se encontro ese autor :(</h1>
      <div className='flex flex-col'>
        <Link className='text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline' to={'/'}>Home</Link>
        <Link className='text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline' to={'/add'}>Agregar autor</Link>
      </div>   
    </div>
  )
}

export default NotFound