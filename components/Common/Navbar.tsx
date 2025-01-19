import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-16 w-full p-4 flex items-center justify-between bg-white'>
        <div className="flex gap-2">
            <Image src="/assets/Football.svg" alt="logo" height={32} width={32}/>
            <h1 className='font-bold text-xl ml-3'>Meda</h1>
        </div>
        <div className="">

        </div>
        {/* LEFT */}
        <div className="">
            <Image src="/assets/notification.svg" alt="logo" height={26} width={26}/>
        </div>
    </div>
  )
}

export default Navbar