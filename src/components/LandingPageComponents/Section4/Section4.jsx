import React, { useEffect, useState } from 'react'
import Progressbar from './Progress';
import './section4.css';
import axios from 'axios';

const Section4 = () => {
    const [progress, setProgress] = useState(0);
    const [why, setWhy] = useState(null);

    const adminHostname  = "http://142.93.217.22/";
   
    useEffect(() => {
        axios.get('http://142.93.217.22/api/aboutUs/list').then((response) => {
            setWhy(response.data)

        }).catch((err) => console.log("Error in section3",err))
    }, [])
    useEffect(() => {
        axios.get('http://142.93.217.22/api/aboutUs/list').then((response) => {
            setWhy(response.data)
        }).catch((err) => console.log("Error in section3",err))
    }, [])

    useEffect(() => {
        setInterval(() => {
            setProgress((val) => val + 1);
        }, 100);
    }, []);

    return (
        <>
            <div className="flex flex-col items-center pt-20 sec4container">
                <h2 className="text-[35px] font-[500] sec4Head ">Why Designers Choose Us ?</h2>
                <p className="text-[19px] italic text-[#CCA200] font-[500]">Elegant Design Patterns  </p>
            </div>

            <div className="flex justify-around pt-14 sec4main">
                <div className="flex flex-col w-[32%] sec4left" data-aos="fade-right">
                    <h5 className='text-[30px] font-[600] sec4Text'>Individuality  of your design.
                        Our Number Speak Ab0ut
                        Everything.  </h5>
                    <p className='text-[#CCA200] text-[22px] italic sec4subText'>High Quality Tailor</p>
                </div>

                <div className="w-[40%] sec4right" data-aos="fade-left">
                    <div className="row justify-content-md-center">
                        <div className="flex flex-col gap-3">
                            <Progressbar/>
                        </div>
                    </div>
                </div>
            </div>
            {/* next setction */}
           {
            why ? (
                <div className="bg-[#001F12] flex sec4bottom  py-14 mt-5 justify-center gap-12">
                <div className="w-[45%] px-3 ml-5 b-left ">
                    <div className="w-[90%] rounded-[70px]">
                        <img src={adminHostname + why[0].pic} alt="" />
                    </div>
                </div>
                <div className="w-[45%] b-right">
                    <div className="flex flex-col b-right-2 gap-12 w-[65%]">
                        <h5 className='text-[#CCA200] text-[24px] font-[800]'>“{why[0].quotation}”</h5>

                        <p className='text-white text-[16px]'>{why[0].description}</p>

                        <div>
                            <h5 className='text-[#CCA200] text-[19px] italic'>{why[0].name}</h5>
                            <p className='text-[20px] text-white font-[600]'>{why[0].designation_name}</p>
                        </div>
                    </div>
                </div>
            </div>
            ): <div className='text-center'>Loading...</div>
           }
        </>
    )
}

export default Section4