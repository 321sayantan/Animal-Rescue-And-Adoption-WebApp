import { useState } from "react";
import axios from "axios";

function ImageUploader({ id, onUploaded, onCheck }) {
  const [isInvalid, setIsInvalid] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (file.length === 0) {
      console.log("path is invalid");
      onCheck(isInvalid);
      setIsInvalid(true);
    } else {
      console.log("path is valid");
      setIsInvalid(false);
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        formData
      );

      if (res.status === 200) {
        const imageData = {
          image: res.data.secure_url,
          image_id: res.data.public_id,
        };
        onUploaded(imageData);
        // console.log(imageData);
      } else {
        throw new Error("Error uploading image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fileSelectClasses = isInvalid ? "is-invalid" : "";

  return (
    <>
      <input
        className={"form-control " + fileSelectClasses}
        type="file"
        id={id}
        onChange={handleImageUpload}
        // multiple
      />
    </>
  );
}

export default ImageUploader;
