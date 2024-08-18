import React, { useState } from 'react';

const ImgComponent = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files; // This is now a FileList containing all selected files
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        // Once all files are read, update the state
        if (newImages.length === files.length) {
          setImages(newImages);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Image Upload and Display</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} multiple />
      <div style={{ marginTop: '20px' }}>
        <h2>Uploaded Images:</h2>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded ${index}`}
            style={{ maxWidth: '200px', maxHeight: '300px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgComponent;
