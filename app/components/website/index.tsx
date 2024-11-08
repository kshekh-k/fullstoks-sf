import React, { ReactNode } from 'react' 
import Header from './header'
function Website ({ children }: { children: ReactNode }) {
  return (
    <>
    <Header />
   <main className='flex flex-col flex-1'>
      {children}
    </main>
    </>
  )
}

export default Website
