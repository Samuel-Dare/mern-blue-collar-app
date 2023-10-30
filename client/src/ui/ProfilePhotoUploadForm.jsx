import React, { useState } from 'react';

const ProfilePhotoUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Function to handle file submission (e.g., to your backend)
  const handleFileSubmit = () => {
    if (selectedFile) {
      // You can send the selectedFile to your server for processing/upload here.
      // Ensure proper security measures and validation on the server.
      console.log('Selected file:', selectedFile);
    }
  };

  return (
    <div>
      <h2>Upload Profile Photo</h2>
      <input
        type="file"
        accept="image/*"
        placeholder="Please select a photo"
        onChange={handleFileChange}
      />
      <button onClick={handleFileSubmit}>Upload</button>
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected Profile Photo"
            style={{ maxWidth: '100px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoUploadForm;
