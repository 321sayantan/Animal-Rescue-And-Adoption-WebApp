import { useState } from "react";
import axios from "axios";

function ImageUploader({ id, multiple, onUploaded, label }) {
  const [images, setImages] = useState([]);

  // let file = [];
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    
    setImages(images, []);
    
    for (const file of files) {
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

          images.push(imageData);
          console.log(69, images);
        } else {
          throw new Error("Error uploading image");
        }
      } catch (error) {
        console.error(error);
      }
    }
    onUploaded(images);
  };

  // const fileSelectClasses = isInvalid ? "is-invalid" : "";

  return (
    <>
      <input
        // className={"form-control " + fileSelectClasses}
        className="form-control"
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

