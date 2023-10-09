import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./section3.css";
import img1 from '../../../assets/sec3imgs/img1.png'
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1
    }
};
const sliderImageUrl = [
    //First image url
    {
        url:
            "https://media.istockphoto.com/id/543079836/photo/measuring-front-of-jacket.jpg?s=612x612&w=0&k=20&c=1iBAoOGAHH8_uQMmX52lV0GfVqsN4Z428k6Mmft8xYE=",
        desc: "this this what "
    },
    {
        url:
            img1,
        desc: "this this what "
    },
    //Second image url
    {
        url:
            "https://media.istockphoto.com/id/543079836/photo/measuring-front-of-jacket.jpg?s=612x612&w=0&k=20&c=1iBAoOGAHH8_uQMmX52lV0GfVqsN4Z428k6Mmft8xYE=",
        desc: "this this what "
    },
];
const Section3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDesc = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <div className="flex flex-col items-center pt-20">
                <h2 className="text-[35px] font-[700]">Our Latest Design</h2>
                <p className="text-[19px] italic text-[#CCA200] font-[500]">Elegant Design Patterns </p>
            </div>


            <div className="parent2 mt-[2rem]" >
                <Carousel
                    className="w-[80%]  mx-auto pl-3 carousel3main"
                    responsive={responsive}
                    autoPlay={false}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    arrows={false}
                    infinite={true}
                    pauseOnHover={true}
                    partialVisible={true}
                    dotListClass="custom-dot-list-style"
                >
                    {sliderImageUrl.map((data, index) => {
                        return (
                            <div className="slider3" key={index}>
                                <div className="sub-slider3 mb-1 h-72" onClick={() => toggleDesc(index)}>
                                    <img src={data.url} alt="movie" />
                                    <div className={`desc3 ${index === activeIndex ? "visible" : "hidden"
                                        }`} >
                                        {data.desc}
                                    </div>
                                </div>
                                <div className="text-lef pl-2">
                                    <h5 className="text-[19px] text-[#121212] font-[400]">Colorful & fashionable wardrobe</h5>
                                    <p className="text-[#CCA200] text-[15px] font-[400]">April 20, 2023 / Tailors</p>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default Section3;