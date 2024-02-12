import React from 'react'
import Logo from './Logo'

import ActionButtons from './ActionButtons'
import { NavigationMenuBar } from './Navigationbar'

const page = () => {
  return (
    <div className='flex items-center justify-between px-10 border-b h-24'>
        <Logo />
        <NavigationMenuBar />
        <ActionButtons />
    </div>
  )
}

export default page