import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { useLocation, useNavigate } from "react-router-dom";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { Link } from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs"

const UpdatePass = () => {

    const naviagte = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })

    const { password, confirmPassword } = formData
    const handleOnChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split("/").at(-1);
        dispatch(resetPassword(password, confirmPassword, token, naviagte))
    }
    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            {
                loading ? (
                    <div>loading...</div>
                ) : (

                    <div className="flex flex-col gap-3 text-richblack-5">
                        <h1 className="text-2xl text-richblack-5 font-bold">Choose new password</h1>
                        <p className="text-richblack-300">Almost done. Enter your new password and youre all set.</p>
                        <form onSubmit={handleOnSubmit} 
                        className="flex flex-col gap-4"
                        >
                            <label className="relative">
                                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                    New password<sup className="text-pink-200"> *</sup></p>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="New password"
                                    value={password}
                                    onChange={handleOnChange}
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>

                            <label className="relative">
                                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                    Confirm new password <sup className="text-pink-200"> *</sup>
                                </p>
                                <input
                                    required
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    placeholder="Confirm Password"
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                >
                                    {showConfirmPassword ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>

                            <button className="bg-yellow-50 py-[12px] px-[12px] rounded-[8px]
                            font-medium hover:bg-yellow-100 transition-all duration-200
                            text-richblack-900">
                                Reset Password
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

export default UpdatePass;
