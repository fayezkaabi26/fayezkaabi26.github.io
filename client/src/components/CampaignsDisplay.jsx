import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import FundCard from './FundCard';

const CampaignsDisplay = ({title, isLoading, campaigns}) => {
    const navigate =  useNavigate();

    const handleNavigate = (campaign) => {
        //navigate('/campaign-details/${campaign.title}', {state: campaign});
    }

    return (
    <div>
        <h1 className='font-epilogue font semi-bold text-white text-center text-[22px]'>{title} ({campaigns.length})</h1>

        <div className='flex flex-wrap mt-[10px] gap-[20px]'>
            {isLoading && (<img src={loader} alt="loader"></img>)}
        
            {!isLoading && campaigns.length === 0 && (<p className='font-epilogue font-semi-bold text-[16px]'>No campaigns for now, create one!</p>)}

            {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard key={campaign.id} {...campaign} handleClick={() => handleNavigate(campaign)}/>)}
        </div>
    </div>
  )
}

export default CampaignsDisplay