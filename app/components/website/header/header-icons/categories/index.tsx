import { Baricon } from '@/app/icons'
import React from 'react'

function Categories() {
  return (
    <div className='relative'>
      <button className='text-primary-300 hover:text-primary-500 ease-in-out duration-200'>
        <Baricon className="size-6" />
      </button>
    </div>
  )
}

export default Categories
