import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FiUpload } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI";

const ChangeProfilePic = () => {

    const {token} = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile)

    const [ImageFile, setImageFile] = useState(null);
    const [previewSource, setPreviewSource] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const fileInputRef = useRef(null)
    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        setImageFile(file);
        previewFile(file)

        console.log("file data", file)
    }

    const previewFile = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

  const handleFileUpload = async () => {
    try {
      console.log("uploading...")
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", ImageFile)
        // console.log("image file -> ", ImageFile);
      console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

    useEffect(() => {
        if (ImageFile) {
            previewFile(ImageFile)
        }

    }, [ImageFile])

    // console.log("image data ", previewSource)
    // console.log("image data ", ImageFile)

    

    return (

        <div>

            <div className="border-[1px] border-richblack-700 bg-richblack-800
            p-8 px-12 rounded-md flex items-center gap-4
            ">
                {/* left part  */}
                <div>
                    <img
                        src={previewSource || user?.image}
                        alt={`profile-${user?.firstName}`}
                        className="aspect-square w-[78px] rounded-full object-cover"
                    />
                </div>

                {/* right part  */}

                <div className="flex flex-col items-start gap-2">
                    <p className="text-richblack-5 font-medium">Change Profile Picture</p>

                    <div className="flex items-center gap-3">

                        <input type="file"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/png, image/gif, image/jpeg"
                        />
                        <button
                            onClick={handleClick}
                            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
                        >
                            Select
                        </button>


                        <button className="flex items-center border border-yellow-50 bg-transparent
                    cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 bg-yellow-50
                    " onClick={handleFileUpload} >
                            {
                                loading ? "Uploading..." : "Upload"
                            }
                            <FiUpload size={18} />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default ChangeProfilePic