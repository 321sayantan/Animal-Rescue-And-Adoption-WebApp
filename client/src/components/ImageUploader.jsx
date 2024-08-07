import { useState } from "react";
import axios from "axios";

function ImageUploader({ id, multiple, onUploaded, label, style }) {
  const [images, setImages] = useState([]);

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
          // console.log(69, images);
        } else {
          throw new Error("Error uploading image");
        }
      } catch (error) {
        console.error(error);
      }
    }
    onUploaded(images);
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        className="form-control"
        type="file"
        id={id}
        onChange={handleImageUpload}
        multiple={multiple}
        style={style}
      />
    </>
  );
}

export default ImageUploader;
