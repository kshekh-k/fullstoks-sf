import { Shoppingbagicon } from '@/app/icons'
import { SfCounter } from '@storefront-ui/react'
import React from 'react'

function Shopping() {
  return (
    <div className='relative'>
      <button className='relative text-primary-300 hover:text-primary-500 ease-in-out duration-200'>
        <SfCounter size="2xs" pill className="text-white bg-warning-500  !px-1 absolute -top-1/2 !right-0 !ring-transparent ">0</SfCounter>
        <Shoppingbagicon className="size-6" />
      </button>
    </div>
  )
}

export default Shopping
