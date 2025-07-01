import React from "react";

const stats = [

    {count:"5K", label:"Active Students"},
    {count:"10+", label:"Mentors"},
    {count:"200+", label:"Courses"},
    {count:"50+", label:"Awards"}
]

const StatsComponent = () => {

    return (
        <div className="grid grid-cols-2
        text-center py-10 gap-4 mb-24
        lg:grid-cols-4 place-items-center text-white bg-richblack-700">
            {
                stats.map((stats, index) => (
                    <div key={index} className="">
                        <h1
                        className="text-3xl font-bold text-richblack-5"
                        >{stats.count}</h1>
                        <p className="text-richblack-500 font-semibold"
                        >{stats.label}</p>
                    </div>
                ))
            }
        </div>
    )

}

export default StatsComponent;