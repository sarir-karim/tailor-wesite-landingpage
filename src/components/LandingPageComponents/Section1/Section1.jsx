import React from 'react'
import './section1.css'

const Section1 = () => {
    return (
        <>
            <div className="flex justify-center items-center firstsec" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >
                <div className="flex flex-col justify-center items-center  gap-5">
                    <h2 className='text-[40px] w-[60%] font-[700] text-center text-white'>
                        Premium couture team.
                        High-end suits.
                    </h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Leo digni....</p>
                    <button className='sec1btn'>DISCOVER</button>
                </div>
            </div>
        </>
    )
}

export default Section1