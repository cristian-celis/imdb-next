import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-large justify-center
    gap-6'>
        <NavbarItem title="Trending" param="fetchTreding"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
