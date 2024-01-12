import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./section2.css";
import axios from "axios";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1
    }
};

const adminHostname = "http://142.93.217.22/";

const Section2 = () => {
    const [ourProcess, setOurProcess] = useState()
    const [processSlide, setProcessSlide] = useState([]);

    useEffect(() => {
        axios.get('http://142.93.217.22/api/stepProcess/list').then((response) => {
            setProcessSlide(response.data)
        }).catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        axios
            .get('http://142.93.217.22/api/ourProcess/list')
            .then((response) => {
                setOurProcess(response.data)
            })
            .catch((error) => console.error("Error fetching data", error))
    }, [])

    return (
        <>
            {
                ourProcess?
                <div className="flex justify-between w-[95%] px-12 py-14 mx-auto sec2firstdiv" >
                    <div className="flex flex-col  w-[40%]  firstleft" data-aos="fade-right"
                        data-aos-duration="500">
                        <h5 className='text-[35px] font-[600]'>{ourProcess[0].heading}</h5>
                        <p className='text-[#CCA200] text-[22px] italic '>{ourProcess[0].tagline}</p>
                    </div>
                    <div className="w-[45%] flex-end sm:w-[100%] firstright" data-aos="fade-left">
                        <p className='text-[#121212] text-[17px]'>{ourProcess[0].description}</p>
                    </div>
                </div>: <div className="text-center text-black">Loading...</div>
            }

            <div className="carousel2cont mt-[2rem]" >
                <Carousel
                    className="w-[80%] mx-auto carousel-main "
                    responsive={responsive}
                    autoPlay={false}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    arrows={false}
                    infinite={true}
                    keyBoardControl={true}
                    partialVisible={true}
                    dotListClass="custom-dot-list-style"
                >

                    {processSlide.map((data) => {
                        const { id, image, name, tagline, description } = data;
                        return (
                            <div className="slider" key={id}>
                                <div className="sub-slider slider-1  mb-1">
                                    <img src={adminHostname + image} className="h-100" alt="movie" />
                                    <div className="desc desc-1"  >
                                        {description}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h5 className="text-[19px] text-[#121212] font-[600]">{name}</h5>
                                    <p className="text-[#CCA200] text-[15px] font-[500]">{tagline}</p>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default Section2;