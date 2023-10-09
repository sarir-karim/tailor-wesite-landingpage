import React from 'react'
import logo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
const Navbar = () => {
    const [menu, setMenu] = useState(true)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <div className="navbar-desktop">
                <div className=" flex justify-between px-6 py-5 border-b-2 items-center border-white text-white font-[600]">
                    <div className="text-[17px] font-[500] ">
                        <span>Email: tailor</span>
                    </div>
                    <div className='text-[18px] flex pl-5'>
                        <img src={logo} alt="" className='w-8' />
                        <span>NIKSHIN PATTERNS </span>
                    </div>
                    <div className='text-[17px] font-[500]'>
                        <span>Whatsapp : +91415514544515</span>
                    </div>
                </div>
                <ul className="flex gap-5 justify-center pt-2 text-[17px] text-white font-[600]">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Desgin</a></li>
                    <li><a href="3">Portfolio</a></li>
                    <li><a href="3">Contact</a></li>
                </ul>
            </div>

            {/* // mobile navbar */}
            <div className=' mobile-navbar'>
                <div className='flex justify-between px-4 py-2 text-white items-center'>
                    <div className='text-[18px] flex gap-2 items-center'>
                        <img src={logo} alt="" className='w-8' />
                        <span>NIKSHIN PATTERNS </span>
                    </div>
                    <div>
                        <FaBars onClick={handleMenu} className='text-xl'/>
                    </div>

                </div>

                    {
                        menu && (
                          <div className="absolute mob-right left-0 w-[100%] top-0  absolute flex justify-end">
                              <div className='bg-black p-3 w-[60%] h-[100vh] '>
                                <div className="flex justify-end">
                                    <RxCross1 onClick={handleMenu} className='text-white text-right font-bold text-xl' />
                                </div>
                                <ul className="flex flex-col gap-5 justify-center pt-2 text-[17px] text-white font-[600] items-center">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Desgin</a></li>
                                    <li><a href="3">Portfolio</a></li>
                                    <li><a href="3">Contact</a></li>
                                    <li><a href="3">Whatsapp : +91415514544515</a></li>
                                </ul>

                            </div>
                          </div>
                        )
                    }
                </div>
        </>

    )
}

export default Navbar