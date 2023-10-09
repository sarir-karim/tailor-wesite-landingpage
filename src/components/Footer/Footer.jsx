import React from 'react'
import logo from '../../assets/logo.png'
import { TfiEmail } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
// import {FaXTwitter} from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
const Footer = () => {
    return (

        <footer class="bg-[#001F12] dark:bg-gray-900 pt-14 px-10">
            <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <img src={logo} className="w-8 ml-4 mb-6" alt="" />
                        <ul class="text-white font-medium">
                            <li class="mb-4">
                                NISHKIN PATTERNS
                            </li>
                            <li className='text-[15px] w-[90%]'>Discover the finest tailor and haute couture studio in town, get in touch with us and let’s start the work on your new suit together</li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-[20px] font-[700] text-white ">Contact Us</h2>
                        <ul class="text-white font-medium">
                            <li class="mb-2">
                                Address
                            </li>
                            <li class="mb-4 text-sm font-[400]">
                                354/1 OPP. Axis Bank, Roorkee
                            </li>
                            <li class="mb-2">
                                Contact
                            </li>
                            <li class="mb-2 flex items-center gap-1">
                                <BsTelephone />
                                +917541552651
                            </li>
                            <li class="mb-4 flex items-center gap-1">
                                <TfiEmail />
                                codemen33@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-[20px] font-[700] text-white ">Quick Links</h2>
                        <ul class="text-white font-[400] text-[14px]">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Home</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Latest Design</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Portfollio</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-[20px] font-[700] text-white ">Follow Us</h2>
                        <ul class="text-white font-medium">
                            <li class="mb-4 text-[16px]">
                                Follow us for exclusive offers, original stories, events and more.
                            </li>
                            <div className='flex text-[18px] gap-4'>
                                <AiOutlineInstagram />
                                <BiLogoFacebook />
                                <BiLogoLinkedin />
                                <RiTwitterXFill />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="border-t-2 w-[80%] mx-auto flex items-center justify-center py-5 text-white">
                    <p>Copyright © 2022-23. All rights reserved</p>
                </div>
            </div>
        </footer>


    )
}

export default Footer