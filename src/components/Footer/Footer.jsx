import React, { useEffect, useState } from 'react'
import logo from '../../assets/p.png'
import { TfiEmail } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { RiTwitterXFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
import axios from 'axios'



const baseURL = 'https://www.instagram.com';
const baseURL2 = 'https://www.facebook.com';
const baseURL3 = 'https://www.linkedin.com';
const baseURL4 = 'https://www.twitter.com';
const baseURL5 = 'https://www.google.com';



const Footer = () => {

    const [links, setLinks] = useState()

    useEffect(() => {
        axios
            .get('http://142.93.217.22/api/contact')
            .then((response) => {
                setLinks(response.data)
            })
            .catch((error) => console.error("Error fetching data", error))
    }, [])
    const instagramLink = new URL(links?.instagram, baseURL).toString();
    const facebookLink = new URL(links?.facebook, baseURL2).toString();
    const linkedinLink = new URL(links?.linkedin, baseURL3).toString();
    const twitterLink = new URL(links?.twitter, baseURL4).toString();
    const websiteLink = new URL(links?.website, baseURL5).toString();
    return (

        <footer className="bg-[#001F12] dark:bg-gray-900 pt-14 px-10">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <img src={logo} className="w-12  ml-4 mb-6" alt="" />
                        <ul className="text-white font-medium">
                            <li className="mb-4" >
                                NISHKIN PATTERNS
                            </li>
                            {links ? (<li className='text-[15px] w-[90%]'>{links.description}</li>) : <li className='text-[15px]'>loading..</li>}
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-[20px] font-[700] text-white ">Contact Us</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-2">
                                Address
                            </li>
                            <li className="mb-4 text-sm font-[400]">
                                {links?.address}
                            </li>
                            <li className="mb-2">
                                Contact
                            </li>
                            <li className="mb-2 flex items-center gap-1">
                                <BsTelephone />
                                {links?.contact}
                            </li>
                            <li className="mb-4 flex items-center gap-1">
                                <TfiEmail />
                                codemen33@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-[20px] font-[700] text-white ">Quick Links</h2>
                        <ul className="text-white font-[400] text-[14px]">
                            <li className="mb-4">
                                <Link
                                    to="navbar"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="hover:underline cursor-pointer">Home</Link>

                            </li>
                            <li className="mb-4">
                                <Link to="section2"
                                    className="hover:underline cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}>
                                    Latest Design
                                </Link>

                            </li>
                            <li className="mb-4">
                                <Link to="section3"
                                    className="hover:underline cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}>
                                    Portfollio
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="section4"
                                    className="hover:underline cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-[20px] font-[700] text-white ">Follow Us</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4 text-[16px]">
                                Follow us for exclusive offers, original stories, events and more.
                            </li>
                            {links ? (
                                <div className='flex text-[18px] gap-4'>
                                    <a href={facebookLink} target='_blank'>
                                        <BiLogoFacebook />
                                    </a>
                                    <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                        <AiOutlineInstagram />
                                    </a>
                                    <a href={linkedinLink} target='_blank'>
                                        <BiLogoLinkedin />
                                    </a>

                                    <a href={twitterLink} target='_blank' >
                                        <RiTwitterXFill />
                                    </a>
                                </div>
                            ) : <></>}
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