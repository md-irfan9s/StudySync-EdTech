import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../HomePages/common/IconBtn";

const RenderTotalAmount = () => {

    const {total, cart} = useSelector((state) => state.cart)

    const handleByCourse = () => {

        const courses = cart.map((course) => course._id)

        console.log("buy all courses ", courses);

        // have to do payment integerate after setup of payment gateway

    }
    return (
        <div>
            <p>Total:</p>
            <p>Rs {total}</p>


            <IconBtn 
            text={"Buy Now"}
            onclick={handleByCourse}
            customClasses={"w-full justify-center"}
            />
        </div>
    )

}

export default RenderTotalAmount