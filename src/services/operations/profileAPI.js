import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import {profileEndpoints} from "../apis"

const {GET_USER_ENROLLED_COURSES_API} = profileEndpoints;

export async function getUserEnrolledCourse (token) {

    
    const toastId = toast.loading("Loading...")

    let result = [];

    try{

        const response = await apiConnector("GET", GET_USER_ENROLLED_COURSES_API, null,
        {
            Authorization : `Bearer ${token}`
        })

    if(!response.data.success) {
        throw new Error(response.data.message);
    }

    result = response.data.success;
    }catch(error) {
        console.log("GET_USER_ENROLLED_COURSES_API ERROR..... ", error)
        toast.error("Could not get user enrolledd courses ");
    }
    toast.dismiss(toastId);
    return result;
}