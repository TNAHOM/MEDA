import React from 'react'
import { UserIcon, UserGroupIcon } from '@heroicons/react/16/solid'
import UpcomingTornament from './UpcomingTornament'
import Ranking from './Ranking'

const Body = () => {
  return (
    <div className="my-4 space-y-6">
        <div className='w-full flex gap-4'>
            <div className="bg-white py-4 space-y-1 w-full rounded-2xl flex flex-col items-center">
                <UserIcon className='bg-white text-lightGreen w-6 h-5'/>
                <p className='font-medium text-sm'>Solo Register</p>
            </div>
            
            <div className="bg-white py-4 space-y-1 w-full rounded-2xl flex flex-col items-center">
                <UserGroupIcon className='bg-white text-lightGreen w-6 h-5'/>
                <p className='font-medium text-sm'>Solo Register</p>
            </div>
        </div>

        <UpcomingTornament />
        <Ranking />
    </div>
  )
}

export default Body