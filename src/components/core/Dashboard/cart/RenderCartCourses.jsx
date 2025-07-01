import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component"
import { removeFromCart } from "../../../../slice/cartSlice";

const RenderCartCourses = () => {

    const {cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            {
                cart.map((course, index) => (
                    <div>
                        <div>
                            <img src={course?.thumbnail} />

                            <div>
                                <p>{course?.courseName}</p>
                                <p>{course?.category?.name}</p>

                                <div>
                                    {/* rating and reviews working*/}

                                    <span>4.8</span>
                                    <ReactStars 
                                    count={5}
                                    size={20}
                                    edit={false}
                                    activeColor="#ffd700"
                                    // have to insert starts icon 
                                    // emptyIcon={}
                                    // fullIcon={}
                                    />

                                    <span>
                                        {course?.ratingAndReviews?.length} Rattings
                                    </span>
                                </div>
                            </div>
                        </div>

                    <div>
                        <button
                        onClick={dispatch(removeFromCart(course._id))}
                        >
                            {/* insert delete icon  */}


                        </button>

                        <p>{course?.price}</p>
                    </div>

                    </div>
                ))
            }
        </div>
    )

}

export default RenderCartCourses;