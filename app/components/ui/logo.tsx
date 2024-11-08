import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='relative'>
      <Image src="/images/fullstoks-logo.svg" alt='' className='w-auto h-auto' width={200} height={40} />
      <h2 className='sr-only'>Fullstoks</h2>
    </div>
  )
}

export default Logo
