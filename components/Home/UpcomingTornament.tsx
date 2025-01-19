import React from 'react'
import { MapPinIcon } from '@heroicons/react/16/solid'

const UpcomingTornament = () => {
  return (
    <div className="">
        <h2 className='font-bold text-base'>Upcoming Tournaments</h2>
        <div className="space-y-2">

            <div className="w-full px-4 py-5 flex justify-between bg-white">
                <div className="space-y-2">
                    <p className='font-bold text-base'>Summer League 2025</p>
                    <p className='text-[#4B5563] text-sm font-normal'>Starting June 15, 2025</p>
                    <div className="flex gap-2 text-[#4B5563] text-sm font-normal">
                        <MapPinIcon width={20} height={24}/>
                        <p>Central Stadium</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-lightGreen font-medium text-sm'>Registration Open</p>
                </div>
            </div>

            <div className="w-full px-4 py-5 flex justify-between bg-white">
                <div className="space-y-2">
                    <p className='font-bold text-base'>Youth Cup 2025</p>
                    <p className='text-[#4B5563] text-sm font-normal'>Starting July 1, 2025</p>
                    <div className="flex gap-2 text-[#4B5563] text-sm font-normal">
                        <MapPinIcon width={20} height={24}/>
                        <p>Sports Complex</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-[#CA8A04] font-medium text-sm'>Coming Soon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingTornament