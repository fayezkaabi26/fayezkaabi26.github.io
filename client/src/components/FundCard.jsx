import React from 'react'
import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({owner, title, description, goal, deadline, balance, image, handleClick}) => {
    const daysLeftDeadline = daysLeft(deadline);

    return (
    <div className='sm:w-[288px] w-full bg-[#1c1c24] cursor-pointer transition duration-500 hover:scale-105' onClick={handleClick}>
        <img src={image} alt="Contribute" className='w-full h-[170px] object-cover rounded-[15px]'/>

        <div className='flex flex-col p-4'>

            <div className='block'>
                <h3 className='font-epilogue font-semibold text-[16px] text-white text-left leading-25px truncate'>{title}</h3>
                <p className='mt-[5px] font-epilogue font-normal text-[13px] text-[lightgray] truncate'>{description}</p>
            </div>

            <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                <div className='flex flex-row'>
                    <h4 className='font-epilogue font-semibold text-[14px] text-[gray] leading-[22px]'>
                        {balance}
                    </h4>
                    <p className='font-epilogue font-normal text-[12px] leading-[18px] text-[royalblue] truncate'>&nbsp;&nbsp;raised from</p>
                    <p className='text-[gold] font-epilogue font-normal text-[14px] truncate'>&nbsp;&nbsp;{goal}</p>
                </div>
                <div className='flex flex-row'>
                    <h4 className='font-epilogue font-semibold text-[14px] text-[gray] leading-[22px]'>
                        {daysLeftDeadline}
                    </h4>
                    <p className='font-epilogue font-normal text-[12px] leading-[18px] text-[royalblue] truncate'>&nbsp;&nbsp;days left</p>
                </div>
            </div>
            <div className='flex items-center mt-[20px]'>
                <p className='flex-1 font-epilogue font-normal text-[10px] text-[royalblue] truncate'>
                    by <span className='text-[gray]'>
                        {owner}
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FundCard