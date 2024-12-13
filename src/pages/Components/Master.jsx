import React from 'react'
import { Outlet } from 'react-router-dom'

const Master = () => {
  return (
    <div className='flex h-screen'>
      <Outlet/>
    </div>
  )
}

export default Master