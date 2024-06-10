import { useState } from "react";
import axios from "axios";

function ImageUploader({ id, multiple, onUploaded, onCheck }) {
  const [isInvalid, setIsInvalid] = useState(false);
  // const [images, setImages] = useState();

  let file = [];
  const handleImageUpload = async (e) => {
    if (multiple === true) {
      for (let i = 0; i < e.target.files.length; i++) {
        file.push(e.target.files[i]);
      }
    } else {
      file = e.target.files[0];
    }

    if (file.length === 0) {
      console.log("path is invalid");
      onCheck(isInvalid);
      setIsInvalid(true);
    } else {
      console.log("path is valid");
      setIsInvalid(false);
    }
    // console.log(file);
    console.log(...file);

    const formData = new FormData();
    // formData.append("file", file);
    formData.append("file", ...file);
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
        text="Photo of your vet"
        onChange={handleImageUpload}
        multiple={multiple}
      />
    </>
  );
}

export default ImageUploader;
