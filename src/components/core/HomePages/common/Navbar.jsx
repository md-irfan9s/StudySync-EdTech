import React, { useEffect, useState } from "react";
import { Link, matchPath, useNavigate } from "react-router-dom";
import logo from "../../../../assets/Logo/Logo-Small-Light.png";
import NavbarLinks from "../../../../data/navbar-links"
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { apiConnector } from "../../../../services/apiconnector";
import { courseEndpoints } from "../../../../services/apis";
import { BsChevronDown } from "react-icons/bs";
import { logout } from "../../../../services/operations/authAPI";
import ProfileDropdown from "../../Auth/ProfileDropDown"


const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile)
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation();
    const [subLink, setSubLink] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // show all categories apis
    const fetchSubLinks = async () => {
        try {
            const result = await apiConnector("GET", courseEndpoints.COURSE_CATEGORY_API);
            console.log("Printing the sublink ", result)
            setSubLink(result.data)
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSubLinks();
    }, [])

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <div className="flex items-center h-14 border-b-[1px] border-richblack-700">
            <div className="flex w-11/12 mx-auto justify-between items-center max-w-maxContent">
                {/* logo image  */}
                <Link to={"/"} className="flex gap-2 justify-center items-center">
                    <img src={logo} alt="logoimg" loading="lazy" className="w-[35x] h-[35px]" />
                    <h1 className="text-2xl text-white font-semibold">StudySync</h1>
                </Link>

                {/* nav links  */}
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6 text-richblack-25">
                        {
                            NavbarLinks.map((link, index) => (
                                <li key={index}> {
                                    link.title === "Catalog" ? (
                                        <div className="relative group flex items-center gap-1">
                                            <p>{link.title}</p>
                                            <BsChevronDown />

                                            <div className="invisible absolute left-[50%]
                                    top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] 
                                    translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 
                                                opacity-0 transition-all duration-150
                                                 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]
                                                ">
                                                <div className="absolute left-[50%] top-0 
                                                    -z-10 h-6 w-6 translate-x-[80%] 
                                                translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5">

                                                </div>
                                                {
                                                    subLink.length ? (
                                                        <Link to={link.path}>
                                                        </Link>
                                                    ) : 

                                                    (<div>Hello Jee</div>)
                                                }
                                                
                                            </div>
                                        </div>
                                    ) :
                                        (
                                            <Link to={link.path}>
                                                <p
                                                    className={`${matchRoute(link.path)
                                                        ? "text-yellow-25"
                                                        : "text-richblack-25"
                                                        }`}
                                                >
                                                    {link.title}
                                                </p>
                                            </Link>
                                        )
                                }
                                </li>
                            ))
                        }
                    </ul>

                </nav>

                {/* login/signup/dashboard  */}

                <div className="flex gap-x-4 text-richblack-200 items-center">
                    {
                        user && user.accountType !== "Instructor" && (
                            <Link to={"/dashboard/cart"} className="relative">
                                <IoCartOutline size={25}/>
                                {
                                    totalItems > 0 && (
                                        <span>
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }

                    {
                        token === null && (
                            <Link to={"/login"}>
                                <button className="border border-richblack-700 
                                        bg-richblack-800 px-[12px] py-[8px] text-richblack-100
                                        rounded-md">
                                    Log in
                                </button>

                            </Link>
                        )
                    }

                    {
                        token === null && (
                            <Link to={"/signup"}>
                                <button className="border border-richblack-700 
                                        bg-richblack-800 px-[12px] py-[8px] text-richblack-100
                                        rounded-md">
                                    Sign up
                                </button>

                            </Link>
                        )
                    }
                    {
                        token !== null && <ProfileDropdown />
                    }

                    {/* <div className="text-4xl text-white"
                    onClick={() => {
                        dispatch(logout(navigate))
                    }}
                    >
                        Logout
                    </div> */}
                </div>

            </div>
        </div>
    )

}

export default Navbar