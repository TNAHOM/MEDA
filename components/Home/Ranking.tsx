import { TrophyIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Ranking = () => {
  return (
    <div>
        <div className="w-full px-4 py-5 bg-white space-y-2">
            <div className="flex justify-between">
                <h2 className='font-bold text-base'>Top Rankings</h2>
                <p className='text-lightGreen font-normal text-normal'>View All</p>
            </div>
            <div className="flex justify-between w-full rounded-t-2xl shadow-sm p-4 bg-[#FEFCE8]">
                <div className="flex items-center gap-2 w-full">
                    <p className='text-lightGreen font-bold text-base'>1</p>
                    <UserCircleIcon width={32} height={32}/>
                    <div className="">
                        <p className='font-medium text-base'>Green Dragons FC</p>
                        <p className='font-normal text-sm text-shade'>Points: 2,450</p>
                    </div>
                </div>
                <div className="">
                    <TrophyIcon width={32} height={32} className='text-[#EAB308]'/>
                </div>
            </div>

            <div className="flex justify-between w-full shadow-sm p-4 bg-[#F9FAFB]">
                <div className="flex items-center gap-2 w-full">
                    <p className='text-lightGreen font-bold text-base'>2</p>
                    <UserCircleIcon width={32} height={32}/>
                    <div className="">
                        <p className='font-medium text-base'>United Stars</p>
                        <p className='font-normal text-sm text-shade'>Points: 2,280</p>
                    </div>
                </div>
                <div className="">
                    <TrophyIcon width={32} height={32} className='text-[#9CA3AF]'/>
                </div>
            </div>

            <div className="flex justify-between w-ful rounded-b-2xl shadow-sm p-4 bg-[#F9FAFB]">
                <div className="flex items-center gap-2 w-full">
                    <p className='text-lightGreen font-bold text-base'>3</p>
                    <UserCircleIcon width={32} height={32}/>
                    <div className="">
                        <p className='font-medium text-base'>Phoenix FC</p>
                        <p className='font-normal text-sm text-shade'>Points: 2,085</p>
                    </div>
                </div>
                <div className="">
                    <TrophyIcon width={32} height={32} className='text-[#EA580C]'/>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Ranking