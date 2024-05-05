import React from 'react'
import logo from '../assets/ZingMP3logo.svg.png';
import { sibebarMenu } from '../ultis/menu';
import { NavLink } from 'react-router-dom';

const notActiveStyle = "py-2 px-[25px] font-bold text-[#032323D] text-[13px] flex gap-[12px] items-center"
const activeStyle = "py-2 px-[25px] font-bold text-[#0F7070] text-[13px] flex gap-[12px] items-center"
const SidebarLeft = () => {
    return (


        <div className='flex flex-col'>
            <div className='w-full h-[70px] py-[15x] px-[25px] flex justify-start items-center'>
                <img src={logo} alt="img" className='w-[120px]  h-10' />
            </div>
            <div className='flex flex-col'>
                {
                    sibebarMenu.map(item => (
                        <NavLink to={item.path}
                            key={item.path}
                            end={item.end}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                        >
                            {item.icon}
                            <span>{item.text}</span>
                        </NavLink>))
                }
            </div>
        </div>

    )
}

export default SidebarLeft