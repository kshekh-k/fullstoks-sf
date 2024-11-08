import Link from 'next/link'
import React from 'react'
import Logo from '../../ui/logo'
import Menu from './menu'
import HeaderIcons from './header-icons' 

const Header: React.FC = () => {
    return (
        <>
            <header className='flex justify-between gap-5 bg-white py-3'>
                <div className='flex-1 flex gap-14'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <Menu />
                </div>
                <HeaderIcons />
            </header>
     
        </>
    )
}

export default Header
