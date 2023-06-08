import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context';
import { contractType } from '@thirdweb-dev/react';
import { CampaignsDisplay, FundCard } from '../components';

const Profile = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getSpecificCampaigns } = useStateContext();
  const fetchCampaigns = async () => {
    setisLoading(true);
    const data = await getSpecificCampaigns();
    setCampaigns(data);
    setisLoading(false);
  };

  useEffect(() => {
    if (contract)
      fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <div className='flex justify-center items-center transition shadow-lg shadow-blue-500/50 p-[16px] mb-[16px] sm:min-w-[380px] bg-[#grayscale] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-[white]'>
          Your profile
        </h1>
      </div>
    <CampaignsDisplay
      title='Your campaigns'
      isLoading={isLoading}
      campaigns={campaigns}
    />
    </div>
  )
}

export default Profile