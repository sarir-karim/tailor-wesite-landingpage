import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import { IoGlobeOutline } from 'react-icons/io5';
import { AiOutlineBars } from 'react-icons/ai';
import './section6.css';
import axios from 'axios';

const Section6 = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: ""
    })

    const [showToast, setShowToast] = useState(false);
    const [showToastEmptyFields, setShowToastEmptyFields] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(value => !value.trim())) {
            setShowToastEmptyFields(true);
            return;
        }

        const userData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            website: formData.website,
            message: formData.message
        }
        axios
            .post("http://142.93.217.22/api/clientQuery/store", userData)
            .then(() => {
                setShowToast(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    website: "",
                    message: ""
                });


            })
            .catch((error) => console.log("error", error))
    }
    return (
        <>
            <div className="bg-[#E6F4EF] p-10 flex mt-20 sec6main">
                <div className="w-[50%] sec6left">
                    <div className="flex flex-col gap-4">
                        <div className="rounded-[70px] w-[80%] mx-auto">
                            <img src="https://media.istockphoto.com/id/543079836/photo/measuring-front-of-jacket.jpg?s=612x612&w=0&k=20&c=1iBAoOGAHH8_uQMmX52lV0GfVqsN4Z428k6Mmft8xYE=" alt="" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h5 className='text-[#001F12] text-[30px] font-[700]'>Want to know more!</h5>
                            <p className='w-[60%] md:w-100 text-center font-[500] formText'>Get ahead of the competition with customized designer clothing for your brand </p>
                        </div>
                    </div>
                </div>

                <div className="w-[50%] sec6right">
                    <div className="flex items-center justify-center relative">
                        <div className="max-w-md w-full py-6  formMain bg-white rounded-lg shadow-lg">
                            <h3 className='text-[28px] font-[700] pb-3'>Send us your query</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center px-2 gap-1">
                                    <FaRegUserCircle className='text-[#AAAAAA]' />
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full  py-2 border-0 outline-0"
                                        placeholder='Name*'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center px-2 gap-1">
                                    <TfiEmail className='text-[#AAAAAA]' />
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full  py-2 border-0 outline-0"
                                        placeholder='Email*'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center px-2 gap-1">
                                    <BsTelephone className='text-[#AAAAAA]' />
                                    <input
                                        type="number"
                                        name="phone"
                                        className="w-full  py-2 border-0 outline-0"
                                        placeholder='Contact*'
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-center px-2 gap-1">
                                    <IoGlobeOutline className='text-[#AAAAAA]' />
                                    <input
                                        type="text"
                                        name="website"
                                        className="w-full  py-2 border-0 outline-0"
                                        placeholder='Website*'
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-6   border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 flex items-start px-2 py-2 gap-1">
                                    <AiOutlineBars className='text-[#AAAAAA] mt-1 ' />
                                    <textarea
                                        type="text"
                                        name="message"
                                        className="w-full  border-0 outline-0 h-20"
                                        placeholder='Message*'
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#001F12]  text-white py-2 rounded-lg mx-auto block  mb-2"
                                >
                                    Submit
                                </button>
                            </form>

                            {showToastEmptyFields && (
                                <div className='h-24 w-[50%] z-50 flex flex-col items-center gap-4 transition-opacity' style={{ position: 'absolute  ', bottom: '15rem', right: '10rem', background: 'red', borderRadius: "5px", color: '#fff', padding: '10px' }}>
                                    <p> Please fill all the fields</p>
                                    <div className="flex justify-center">
                                        <button className='bg-white text-black px-5 rounded-md text-xl' onClick={() => setShowToastEmptyFields(false)}>Okay</button>
                                    </div>
                                </div>
                            )}
                            {showToast && (
                                <div className='h-24 w-[50%] z-50 flex flex-col items-center gap-4 transition-all' style={{ position: 'absolute  ', bottom: '15rem', right: '10rem', background: '#001F12', borderRadius: "5px", color: '#fff', padding: '10px' }}>
                                    <p> Form submitted successfully!</p>
                                    <div className="flex justify-center">
                                        <button className='bg-white text-black px-5 rounded-md text-xl' onClick={() => setShowToast(false)}>Okay</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Section6