import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./section2.css";
import img1 from '../../../assets/section2images/img1.png'

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
const sliderImageUrl = [
    //First image url
    {
        url:
            img1,
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
            img1,
        desc: "this this what "
    },
    //Third image url
    {
        url:
            img1,
        desc: "this this what "
    },

    //Fourth image url

    {
        url:
            img1,
        desc: "this this what "
    }
];
const Section2 = () => {
    return (
        <>
            <div className="flex justify-between w-[95%] px-12 py-14 mx-auto sec2firstdiv" >
                <div className="flex flex-col  w-[40%]  firstleft" data-aos="fade-right"
                    data-aos-duration="500">
                    <h5 className='text-[35px] font-[600]'>Individuality  of your design
                        Create your style </h5>
                    <p className='text-[#CCA200] text-[22px] italic '>High Quality Tailor</p>
                </div>
                <div className="w-[45%] flex-end sm:w-[100%] firstright" data-aos="fade-left">
                    <p className='text-[#121212] text-[17px]'>Lorem ipsum dolor sit amet consectetur. Massa duis feugiat
                        id elit. Leo egestas elit feugiat consequat ultrices cursus nulla
                        viverra. Sit integer ut lectus porttitor ipsum duis accumsan
                        purus metus. Turpis rhoncus in porttitor turpis. Nulla vestibulum leo consectetur vitae lorem quam lectus.</p>
                </div>
            </div>

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
                    <div className="slider">
                        <div className="sub-slider slider-1  mb-1">
                            <img src={img1} alt="movie" />
                            <div className="desc desc-1"  >
                                This is what
                            </div>
                        </div>
                        <div className="text-center">
                            <h5 className="text-[19px] text-[#121212] font-[600]">Singer Machine</h5>
                            <p className="text-[#CCA200] text-[15px] font-[500]">Custom Design</p>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="sub-slider mb-1">
                            <img src={img1} alt="movie" />
                            <div className="desc"  >
                                This is what
                            </div>
                        </div>
                        <div className="text-center">
                            <h5 className="text-[19px] text-[#121212] font-[600]">Singer Machine</h5>
                            <p className="text-[#CCA200] text-[15px] font-[500]">Custom Design</p>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="sub-slider mb-1">
                            <img src={img1} alt="movie" />
                            <div className="desc"  >
                                This is what
                            </div>
                        </div>
                        <div className="text-center">
                            <h5 className="text-[19px] text-[#121212] font-[600]">Singer Machine</h5>
                            <p className="text-[#CCA200] text-[15px] font-[500]">Custom Design</p>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="sub-slider slider-1 mb-1">
                            <img src={img1} alt="movie" />
                            <div className="desc desc-1"  >
                                This is what
                            </div>
                        </div>
                        <div className="text-center">
                            <h5 className="text-[19px] text-[#121212] font-[600]">Singer Machine</h5>
                            <p className="text-[#CCA200] text-[15px] font-[500]">Custom Design</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    );
};
export default Section2;