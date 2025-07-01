import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {RxCountdownTimer} from "react-icons/rx"

const VerifyEmail = () => {

    const {signupData, loading} = useSelector( (state) => state.auth);
    const [otp ,SetOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( () => {
        if(!signupData) {
            navigate("/signup")
        }
    },[])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,

        } = signupData

        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword,otp, navigate))


        console.log("all details ", accountType, firstName, lastName, email, password, confirmPassword,otp
        )
    }

    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center text-richblack-5">
            {
                loading ? ( <div>Loading...</div> )
                : (
                    <div className="flex flex-col gap-3 max-w-[500px] p-4 lg:p-8">
                        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">Verify email</h1>
                        <p className="text-richblack-300"
                        >A verification code has been sent to you. Enter the code below</p>

                        <form onSubmit={handleOnSubmit} className="w-full flex flex-col gap-5">

                        <OTPInput 
                        value={otp}
                        onChange={SetOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input 
                        {...props} 
                        
                        style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[40px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                  aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                        
                        />}
                        containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
                        />

                        <button type="submit"
                        className="bg-yellow-50 py-[12px] px-[12px]
                        rounded-[8px] text-richblack-900
                        "
                        > 
                            Verify Email
                        </button>
                        </form>

                        <div className="flex justify-between">
                            <div className="group">
                                <Link to={"/login"} className="flex items-center gap-2">
                                <BsArrowLeft 
                                className="relative right-0 group-hover:right-[1.5%]
                            transition-all duration-200"
                                />
                                <p>
                                    Back to login</p>
                            </Link>
                            </div>

                            <div className="flex gap-2 items-center text-blue-200">
                                <RxCountdownTimer />
                                <button onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                               className=""
                               >resend it</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>


    )

}

export default VerifyEmail;