import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourse } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCourses = () => {

    const {token} = useSelector((state) => state.auth);

    const [enrolledCourses, setEnrolledCourses] = useState(null)

    const getEnrolleddCourse = async() => {
        try{
            // fetch response 
            const response = await getUserEnrolledCourse(token);
            setEnrolledCourses(response);
        }
        catch(error) {
            console.log("Unable to fetch enrolled courses");
        }
    }

    useEffect( () => {
        getEnrolleddCourse();
    }, [])

    return (
        <div className="text-richblack-5">
            <h1>Enrolled Courses</h1>

            <div>
                {
                    !enrolledCourses ? ( <div>
                        loading...
                    </div> )
                    : !enrolledCourses.length ? 
                    (<p>You have not enrolled in any courses</p>) : 
                        (<div>
                            
                            <div>
                                <p>Course Name</p>
                                <p>Duration</p>
                                <p>Progress</p>
                            </div>

                            {
                                enrolledCourses.map((course, index) => (
                                    <div key={index}>
                                        <div>
                                            <img src={course.thumbnail} alt="" />

                                            <div>
                                                <p>{course.courseName}</p>
                                                <p>{course.courseDescription}</p>
                                            </div>
                                        </div>

                                        <div>
                                            {course?.totalDuration}
                                        </div>

                                        <div>
                                            <p>Progress : {course.progressPercentage || 0}%</p>
                                            <ProgressBar 
                                            completed={course.progressPercentage || 0}
                                            height="8px"
                                            isLabelVisible={false}
                                            />
                                        </div>

                                    </div>
                                ))
                            }

                        </div>)
                }


            </div>
        </div>
    )

}

export default EnrolledCourses