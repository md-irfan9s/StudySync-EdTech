import React from "react";
import ContactUsForm from "../../ContactPages/ContactUsForm";

const ContactFormSection = () => {

    return(

        <div className="mx-auto">
            <h1
            className="text-4xl text-richblack-5 text-center font-semibold"
            >Get in Touch</h1>
            
            <p className="text-richblack-500 text-center mt-3 mb-5" 
            >
                
                We'd love to here for you, Please fill out this form.</p>

            <ContactUsForm />
        </div>
    )

}

export default ContactFormSection