import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        dispatch(getPasswordResetToken(email, setEmailSent))
        
    }

    return (

        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            {
                loading ? (
                    <div>loading....</div>
                ) : (
                    <div className="text-white flex flex-col justify-start items-start
                    max-w-[500px] gap-6 p-4 lg:p-8
                    ">

                        <h1 className="text-2xl font-bold">
                            {
                                !emailSent ? "Reset Your Password" : "Check Email"
                            }
                        </h1>

                        <p className="text-richblack-300">
                            {
                                !emailSent ?
                                    "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                                    :
                                    `We have sent the reset email to
                                        ${email}`
                            }
                        </p>

                        <form onSubmit={handleOnSubmit}
                        className="flex flex-col gap-5 w-full"
                        >

                            {
                                !emailSent && (
                                    <label className="w-full">

                                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                            Email Address <sup className="text-pink-200">*</sup>
                                            </p>

                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                                        />

                                    </label>
                                )
                            }

                            <button type="submit"
                            className="mt-2 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900
                            hover:bg-yellow-100 transition-all duration-200
                            "
                            >
                                {
                                    !emailSent ? "Reset Password" : "Resend Email"
                                }
                            </button>

                        </form>



                        <div className="group ">
                            <Link to={"/login"}
                            className="flex items-center gap-2"
                            >
                            <BsArrowLeft 
                            className="relative right-0 group-hover:right-[1.5%]
                            transition-all duration-200"
                            />
                            <p>Back to login</p>
                        </Link>
                        </div>

                    </div>
                )
            }
        </div>
    )

}

export default ForgotPassword