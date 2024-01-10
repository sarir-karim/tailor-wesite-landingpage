import React, { useEffect, useState } from 'react'
import './section1.css'
import axios from 'axios'

const Section1 = () => {
    const [heading, setHeading] = useState()

    useEffect(() => {
        axios
            .get('http://142.93.217.22/api/heroSlider/list')
            .then((response) => {
                // console.log(response)
                setHeading(response.data)
            })
            .catch((error) => console.error("Error fetching data", error))
    }, [])
    return (
        <>

            {heading ? (
                <div className="flex justify-center items-center firstsec " id='section1' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"  >
                    <div className="flex flex-col justify-center items-center  gap-5">
                        <h2 className='text-[40px] w-[60%] font-[700] text-center text-white'>
                            {heading[0].heading}
                        </h2>
                        <p className='text-white'>{heading[0].tagline}</p>
                        <button className='sec1btn'>DISCOVER</button>
                    </div>
                </div>
            ) :
                <h2 className='text-center text-white mt-[10rem]'>Loading...</h2>}
        </>
    )
}

export default Section1