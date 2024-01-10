import React, { useState , useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./section3.css";
import img1 from '../../../assets/sec3imgs/img1.png';
import axios from "axios";

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

const adminHostname  = "http://142.93.217.22/";
const Section3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const [design, setDesign] = useState([])

    useEffect(() => {
        axios.get('http://142.93.217.22/api/design/list').then((response) => {
            setDesign(response.data)
        }).catch((err) => console.log("Error in section3",err))
    }, [])

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
                    {design.map((data, index) => {
                        return (
                            <div className="slider3" key={index}>
                                <div className="sub-slider3 mb-1 h-72" onClick={() => toggleDesc(index)}>
                                    <img src={adminHostname + data.design_thumbnail} alt="movie" />
                                    <div className={`desc3 ${index === activeIndex ? "visible" : "hidden"
                                        }`} >
                                        {data.link  }
                                    </div>
                                </div>
                                <div className="text-lef pl-2">
                                    <h5 className="text-[19px] text-[#121212] font-[400]">{data.name}</h5>
                                    <p className="text-[#CCA200] text-[15px] font-[400]">{data.tagline}</p>
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