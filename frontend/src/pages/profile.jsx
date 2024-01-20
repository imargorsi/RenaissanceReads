import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import supabase from "../supabase.js";
import axios from "axios";

function Profile() {
  const randomNumber = Math.floor(Math.random() * 100);
  const { currentUser } = useSelector((state) => state.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(currentUser.profile);

  // to handle the edit details
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(currentUser.fullName);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");

  // to handle the upload status and to show the message
  const [uploadStatus, setUploadStatus] = useState(null);

  // Reference to the input field for selecting an image
  const imgFileRef = useRef(null);

  // Function to handle changes in the selected image file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Effect to update the image URL when the selected image changes
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    } else {
      setImageUrl(currentUser.profile);
    }
  }, [selectedImage, currentUser.profile]);

  // Function to handle the image upload
  const handleUpload = async () => {
    // Reset the upload status message
    setUploadStatus(null);

    if (selectedImage) {
      try {
        const { data, error } = await supabase.storage
          .from("images") // Name of the storage bucket
          .upload(`profile/${currentUser.id}.${randomNumber}`, selectedImage); // File object

        if (error) {
          console.error("Error uploading image:", error.message);
          setUploadStatus("Error uploading image. Please try again.");
        } else {
          const imageUrl = `${supabase.storageUrl}/object/public/images/${data.path}`; // setting the supabase url

          console.log("Image uploaded successfully:", imageUrl);
          setImageUrl(imageUrl);

          // Set a success message
          setUploadStatus("Image uploaded successfully!");
        }
      } catch (error) {
        console.error("Unexpected error during image upload:", error.message);
        setUploadStatus(
          "Unexpected error during image upload. Please try again."
        );
      }
    }
  };

  // Function to handle the start of editing the user details
  const handleEditDetails = () => {
    setIsEditing(true);
  };

  // Function to handle saving the user details
  const handleSaveDetails = async () => {
    setIsEditing(false);
    try {
      // Send a request to update user details
      const response = await axios.post("/api/editUser", {
        fullName: fullName,
        password: password,
        id: currentUser.id,
        email: currentUser.email,
      });

      // Update the local state with the updated user details
      setFullName(response.data.fullName);
      setEmail(response.data.username);

      // Optionally, clear the password field after saving
      setPassword("");
    } catch (error) {
      console.error("Error updating user details:", error.message);
    }
  };

  // JSX structure for the component
  return (
    <div className="profile container">
      <div className="profileabout">
        <h1 className="heading__h2">Welcome Back, {currentUser.fullName}</h1>

        <div className="about__summary">
          <div>
            {/* Input field for selecting an image */}
            <input
              className="inputFiled"
              type="file"
              ref={imgFileRef}
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {/* Display the selected or default image */}
            <img
              className="profilepic"
              src={imageUrl}
              alt=""
              onClick={() => imgFileRef.current.click()}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="about__summary__text">
            {/* Display the user details as headings or input fields based on editing state */}
            <div className="summary__element">
              <h3 className="heading__h3">Display Name:</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              ) : (
                <p className="paragraph">{fullName}</p>
              )}
            </div>
            <div className="summary__element">
              <h3 className="heading__h3">Email:</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p className="paragraph">{email}</p>
              )}
            </div>

            {/* Conditionally render password input only in editing mode */}
            <div className="summary__element">
              {isEditing && (
                <>
                  <h3 className="heading__h3">Password:</h3>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}
            </div>

            <div className="button">
              {/* Conditionally render either Save or Edit button based on editing state */}
              {isEditing ? (
                <button className="btn" onClick={handleSaveDetails}>
                  Save Details
                </button>
              ) : (
                <button className="btn" onClick={handleEditDetails}>
                  Edit Details
                </button>
              )}
              {/* Conditionally render the Upload Image button and status message */}
              {selectedImage && (
                <>
                  <button className="btn" onClick={handleUpload}>
                    Upload Image
                  </button>
                  {uploadStatus && (
                    <p className="upload-status">{uploadStatus}</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <hr className="profile__line" />
      </div>
    </div>
  );
}

export default Profile;
