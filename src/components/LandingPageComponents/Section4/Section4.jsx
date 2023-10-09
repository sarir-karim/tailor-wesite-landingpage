import React, { useEffect, useState } from 'react'
import Progressbar from './Progress';
import './section4.css'
const Section4 = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProgress((val) => val + 1);
        }, 100);
    }, []);

    return (
        <>
            <div className="flex flex-col items-center pt-20 sec4container">
                <h2 className="text-[35px] font-[500] ">Why Designers Choose Us ?</h2>
                <p className="text-[19px] italic text-[#CCA200] font-[500]">Elegant Design Patterns  </p>
            </div>

            <div className="flex justify-around pt-14 sec4main">
                <div className="flex flex-col w-[32%] sec4left" data-aos="fade-right">
                    <h5 className='text-[30px] font-[600]'>Individuality  of your design.
                        Our Number Speak Ab0ut
                        Everything.  </h5>
                    <p className='text-[#CCA200] text-[22px] italic '>High Quality Tailor</p>
                </div>

                <div className="w-[40%] sec4right" data-aos="fade-left">
                    <div className="row justify-content-md-center">
                        <div className="flex flex-col gap-3">
                            <Progressbar value={25} description="Express Repair" />
                            <Progressbar value={50} description="Restoration" />
                            <Progressbar value={75} description="Express Repair" />
                            <Progressbar value={100} description="Express Repair" />
                        </div>
                    </div>
                </div>
            </div>
            {/* next setction */}
            <div className="bg-[#001F12] flex sec4bottom  py-14 mt-5 justify-center gap-12">
                <div className="w-[45%] px-3 ml-5 b-left ">
                    <div className="w-[90%] rounded-[70px]">
                        <img src="https://media.istockphoto.com/id/543079836/photo/measuring-front-of-jacket.jpg?s=612x612&w=0&k=20&c=1iBAoOGAHH8_uQMmX52lV0GfVqsN4Z428k6Mmft8xYE=" alt="" />
                    </div>
                </div>
                <div className="w-[45%] b-right">
                    <div className="flex flex-col b-right-2 gap-12 w-[65%]">
                        <h5 className='text-[#CCA200] text-[24px] font-[800]'>“It’s time for you to future -
                            proof your career !”</h5>

                        <p className='text-white text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis? Nesciunt possimus quisquam tenetur, vitae, necessitatibus, modi accusantium placeat aliquam consectetur laudantium.</p>

                        <div>
                            <h5 className='text-[#CCA200] text-[19px] italic'>Nitin Parihar</h5>
                            <p className='text-[20px] text-white font-[600]'>Founder, Nikshin Patterns</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4