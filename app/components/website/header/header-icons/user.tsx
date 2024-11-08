import { Usericon } from '@/app/icons'
import React from 'react'

function User() {
  return (
    <div>
      <button className='text-primary-300 hover:text-primary-500 ease-in-out duration-200'>
        <Usericon className="size-6" />
      </button>
    </div>
  )
}

export default User
