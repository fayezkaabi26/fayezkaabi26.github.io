import React,  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import CustomButton from './CustomButton';
import { logo, menu, search, thirdweb } from '../assets';
import { navlinks } from '../constants';
import { useStateContext } from '../context';

const NavBar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState('dashboard');
  const [toggleDrawer, settoggleDrawer] = useState(false);

  const { connect, address } = useStateContext();


  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className='lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px] transition duration-500 hover:scale-120 shadow-lg shadow-indigo-500/50'>
        
        <input type='text' placeholder='Search for campaigns' className='flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none'></input>

        <div className='w-[72px] h-full rounded-[20px] bg-[royalblue] flex justify-center items-center cursor-pointer transition duration-500 hover:scale-110 shadow-lg shadow-indigo-500/50'>
          <img src={search} alt='search' className='w-[15px] h-[15px] object-contain'/>
        </div>
      </div>
      <div className='sm:flex hidden flex-row justify-end gap-4'>
          <CustomButton
            btnType="button"
            title={address ? 'Create a campaign' : 'Connect'}
            styles={address ? 'bg-[royalblue] transition duration-500 hover:scale-120 shadow-lg shadow-indigo-500/50' : 'bg-[#8c6dfd] transition duration-500 hover:scale-120 shadow-lg shadow-indigo-500/50'}
            handleClick={() => {
              if (address) navigate('create-campaign')
              else connect();
            }}
          />

          <Link to= "/profile">
            <div className= "w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                <img src={thirdweb} className='w-[60%] h-[60%] object-contain'/>
            </div>
          </Link>
      </div>

      {/* Small screen navigation */}
      <div className='sm:hidden flex justify-between items-center relative'>
        <div className= "w-[40px] h-[40px] rounded-[10px] bg-[grayscale] flex justify-center items-center cursor-pointer">
          <img src={logo} className='w-[60%] h-[60%] object-contain'/>
        </div>
        
        <img
          src={menu}
          alt='menu'
          className='w-[30px] h-[30px] object-contain cursor-pointer'
          onClick={() => settoggleDrawer((prev) => !prev)}
        />

        <div className={`absolute rounded-[15px] top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 
        ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-[0]'} 
        transition-all duration-700`}>
          <ul className='mb-4'>
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 rounded-[10px] ${isActive === link.name && 'bg-[#grayscale] transition duration-500 hover:scale-120 shadow-lg shadow-indigo-500/50'}`}
                onClick={() => {
                  setisActive(link.name);
                  settoggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                />
                <p className={`ml-[20px] font-epilogue font-normal text-[17px] ${isActive === link.name ? 'text-[#41b5f0] ' : 'text-[lightgray]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className='flex mx-4'>
            <CustomButton
              btnType="button"
              title={address ? 'Create a campaign' : 'Connect'}
              styles={address ? 'bg-[royalblue] transition duration-500 hover:scale-115 shadow-lg shadow-indigo-500/50' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if (address) navigate('create-campaign')
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar