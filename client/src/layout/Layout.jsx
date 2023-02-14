import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-xl bold font-bold'>Favorite Autors</h1>
        <Outlet />
    </div>
  )
}

export default Layout