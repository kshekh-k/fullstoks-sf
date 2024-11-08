import { Hearticon } from '@/app/icons'
import React from 'react'

function Wishlist() {
  return (
    <div>
      <button className='text-primary-300 hover:text-primary-500 ease-in-out duration-200'>
        <Hearticon className="size-6" />
      </button>
    </div>
  )
}

export default Wishlist
