import React from "react";
import ContactUsForm from "../components/ContactPages/ContactUsForm";
import {HiChatBubbleLeftRight} from "react-icons/hi2"
import {IoCall} from "react-icons/io5"
import {BiWorld} from "react-icons/bi"
import Footer from "../components/core/HomePages/common/Footer";


const ContactUs = () => {
    return (
        <>
        <div className="w-11/12 max-w-maxContent mx-auto mt-20">

            <div className="flex flex-col lg:flex-row gap-10 mx-auto items-start justify-center
            text-richblack-5 
            "> 
                {/* left section  */}
                <div className=" flex flex-col lg:w-[40%] items-start justify-center mx-auto
                bg-richblack-800 p-5 lg:p-10 rounded-xl gap-14 w-full
                ">
                    <div className="text-richblack-200 text-sm">
                        <div className="flex gap-3 items-center">
                            {/* icon */}
                            <HiChatBubbleLeftRight size={25}/>
                            <h1 className=" text-lg font-semibold text-richblack-5"
                            >Chat on us</h1>
                        </div>
                        <p className="font-medium text-sm text-richblack-200
                        ">Our friendly team is here to help.</p>
                        <p className="font-semibold text-richblack-200">info@studysync.com</p>
                    </div>
                    

                    <div className="text-richblack-200 text-sm">
                        <div className="flex gap-4 items-center">
                            {/* icon */}
                            <BiWorld size={25}/>
                            <h1 className="text-lg font-semibold text-richblack-5">Visit us</h1>
                        </div>
                        <p className="font-medium text-sm text-richblack-200">Come and say hello at our office HQ.</p>
                        <p className="font-semibold text-richblack-200"> Ranchi Jharkhand-834001</p>
                    </div>


                    <div className="text-richblack-200 text-sm">
                        <div className="flex gap-4 items-center">
                            {/* icon */}
                            <IoCall size={25}/>
                            <h1 className="text-lg font-semibold text-richblack-5">Call us</h1>
                        </div>
                        <p className="font-medium text-sm text-richblack-200"> 
                        Mon - Fri From 8am to 5pm
                        </p>
                        <p className="font-semibold text-richblack-200">
                            +123 456 7890
                        </p>
                    </div>
                </div>


                {/* right section  */}
                
                <div className=" w-full lg:w-[60%] border border-richblack-600 p-7 lg:p-14 rounded-xl
                tracking-wide mb-10
                ">
                    <h1
                    className="text-4xl text-richblack-5 font-bold mb-3"
                    >Got a Idea? We've got the skills. Let's team up</h1>
                    <p className="mb-10 text-richblack-200 font-medium tracking-wide"
                    >Tell us more about yourself and what you're got in mind.</p>


                    <ContactUsForm />
                </div>

            </div>

        </div>

            <Footer />


        </>

    )

}

export default ContactUs;