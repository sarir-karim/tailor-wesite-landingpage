
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./section5.css";
import { useState, useEffect } from "react";
import axios from "axios";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 1,
        slidesToSlide: 1
    }
};

const adminHostname = "http://142.93.217.22/";

const Section5 = () => {
    const [testimonial, setTestimonail] = useState([])
    useEffect(() => {
        axios.get('http://142.93.217.22/api/testimonial/list').then((response) => {
            setTestimonail(response.data)

        }).catch((err) => console.log("Error in section3", err))
    }, [])
    return (
        <>
            <div className="flex flex-col items-center pt-16 sec5container">
                <h2 className="text-[35px] font-[700] clinetHead">Here What Our Client Say </h2>
                <p className="text-[19px] italic text-[#CCA200] font-[500]">High Quality Tailor </p>
            </div>


            <div className="parent mt-[2rem]" >
                <Carousel
                    className="w-[80%] mx-auto sec5carousel"
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
                    {testimonial.map(data => {
                        return (
                            <div className="slider5" key={data.id} >
                                <div className="sub-slider5 mb-1 border py-4 px-3">
                                    <p>{data.name}</p>
                                    <p className="text-[#C2B271] pt-3">{data?.description}</p>
                                </div>
                                <div className="desc5"  >
                                    <img src={adminHostname + data.client_pic} alt="" />
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};
export default Section5;