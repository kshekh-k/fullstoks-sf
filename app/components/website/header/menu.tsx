"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
const nav = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Shop',
        path: '/shop',
    },
    {
        name: 'Collections',
        path: '/collections',
    },
    {
        name: 'New Arrivals',
        path: '/new-arrivals',
    },
    {
        name: 'Sell',
        path: '/sell',
    },
]

const Menu: React.FC = () => {
    const pathname = usePathname();
    const isActive = pathname;
    return (
        <nav className='flex gap-10 items-center'>
            {nav.map((item, index) =>
                <Link key={index} href={item.path} className={`uppercase  hover:text-primary-500 ease-in-out duration-200 font-medium tracking-widest text-sm relative py-3 after:absolute after:w-full after:h-px after:bg-warning-500 after:left-0 after:ease-in-out after:duration-200 hover:after:bottom-0 hover:after:opacity-100 ${isActive === item.path ? 'text-primary-500 after:opacity-100 after:bottom-0' : 'text-primary-300 after:opacity-0 after:-bottom-10'}`}>
                    {item.name}
                </Link>
            )}
        </nav>
    )
}

export default Menu
