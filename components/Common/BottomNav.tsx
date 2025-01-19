import { TrophyIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'

const BottomNav = () => {
  return (
    <div className='flex justify-between w-full'>
        <div className="flex flex-col items-center w-full">
            <HomeIcon width={32} height={32} className='text-shade'/>
            <p>Home</p>
        </div>
        {/* <div className="flex flex-col items-center w-full">
            <HomeIcon width={32} height={32} className='text-shade'/>
            <p>Home</p>
        </div> */}
        <div className="flex flex-col items-center w-full">
            <TrophyIcon width={32} height={32} className='text-shade'/>
            <p>Ranking</p>
        </div>
        <div className="flex flex-col items-center w-full">
            <UserCircleIcon width={32} height={32} className='text-shade'/>
            <p>Profile</p>
        </div>

    </div>
  )
}

export default BottomNav