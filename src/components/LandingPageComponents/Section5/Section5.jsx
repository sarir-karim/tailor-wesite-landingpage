import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./section5.css";
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
const sliderImageUrl = [
    //First image url
    {
        cdesc: "“Lorem ipsum dolor sit amet  consectetur. Leo digniorem ipsum dolor sit amet consectetur.",
        name: "Seema",
        img: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?b=1&s=612x612&w=0&k=20&c=jc27S9EzcqPWne91HrtCaveIe8qazVsGhDjYRdwNLoU="
    },
    {
        cdesc: "“Lorem ipsum dolor sit amet  consectetur. Leo digniorem ipsum dolor sit amet consectetur.",
        name: "Karan",
        img: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY="
    },
    {
        cdesc: "“Lorem ipsum dolor sit amet  consectetur. Leo digniorem ipsum dolor sit amet consectetur.",
        name: "Amar",
        img: "https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_640.jpg"
    },

];
const Section5 = () => {
    return (
        <>
            <div className="flex flex-col items-center pt-16 sec5container">
                <h2 className="text-[35px] font-[700]">Here What Our Client Say </h2>
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
                    {sliderImageUrl.map((data, index) => {
                        return (
                            <div className="slider5" key={index} >
                                <div className="sub-slider5 mb-1 border py-4 px-3">
                                    <p>{data.cdesc}</p>
                                    <p className="text-[#C2B271] pt-3">{data.name}</p>
                                </div>
                                <div className="desc5"  >
                                    <img src={data.img} alt="" />
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