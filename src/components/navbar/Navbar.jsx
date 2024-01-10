import React from 'react'
import logo from '../../assets/p.png'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import { Link, } from "react-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <>
            <div className="navbar-desktop" id='navbar'>
                <div className=" flex justify-between px-6 py-5 border-b-2 items-center border-white text-white font-[600]">
                    <div className="text-[17px] font-[500] ">
                        <span>Email: codemen33@gmail.com</span>
                    </div>
                    <div className='text-[18px] flex pl-5 items-center'>
                        <img src={logo} alt="" className='w-8' />
                        <span>NIKSHIN PATTERNS </span>
                    </div>
                    <div className='text-[17px] font-[500]'>
                        <span>Whatsapp : +91 6367-578913</span>
                    </div>
                </div>
                <ul className="flex gap-5 justify-center pt-2 text-[17px] text-white font-[600]">
                    <li className='cursor-pointer'>
                        <Link to="section1"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Home</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="section2"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Desgin</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="section3"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Portfolio</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to="section4"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Contact</Link>
                    </li>
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
                        <FaBars onClick={handleMenu} className='text-xl' />
                    </div>

                </div>

                {
                    menu && (
                        <div className="absolute mob-right left-0 w-[100%] top-0  absolute flex justify-end">
                            <div className='bg-black p-3 w-[60%] h-[100vh] '>
                                <div className="flex justify-end">
                                    <RxCross1 onClick={handleMenu} className='text-white text-right font-bold text-xl' />
                                </div>
                                <ul className="flex gap-14 flex-col pt-2 text-[17px] text-white text-center pt-10 font-[600]">
                                    <li className='cursor-pointer'>
                                        <Link to="section1"
                                            spy={true}
                                            smooth={true}
                                            onClick={handleMenu}
                                            duration={500}>
                                            Home</Link>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Link to="section2"
                                            spy={true}
                                            smooth={true}
                                            onClick={handleMenu}
                                            duration={500}>
                                            Desgin</Link>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Link to="section3"
                                            spy={true}
                                            smooth={true}
                                            onClick={handleMenu}
                                            duration={500}>
                                            Portfolio</Link>
                                    </li>
                                    <li className='cursor-pointer'>
                                        <Link to="section4"
                                            spy={true}
                                            smooth={true}
                                            onClick={handleMenu}
                                            duration={500}>
                                            Contact</Link>
                                    </li>
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