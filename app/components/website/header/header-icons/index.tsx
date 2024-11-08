import { Hearticon, Searchicon, Shoppingbagicon, Usericon } from '@/app/icons'
import React from 'react' 
import User from './user'
import Wishlist from './wishlist'
import Shopping from './shopping'
import Categories from './categories'
import Search from './search'

function HeaderIcons() {
  return (
    <div className='flex justify-between gap-5 items-center'>
      <Search />
      <User />
      <Wishlist />
      <Shopping />
      <Categories />
    </div>
  )
}

export default HeaderIcons
