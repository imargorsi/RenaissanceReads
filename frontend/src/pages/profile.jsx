import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import supabase from "../supabase.js";
import axios from "axios";

function Profile() {
  const randomNumber = Math.floor(Math.random() * 100);
  const { currentUser } = useSelector((state) => state.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(currentUser.profilePicture);

  // to handle the edit summary
  const [isEditing, setIsEditing] = useState(false);
  const [summary, setSummary] = useState(currentUser.summary);

  const imgFileRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    } else {
      setImageUrl(currentUser.profilePicture);
    }
  }, [selectedImage, currentUser.profilePicture]);

  const handleUpload = async () => {
    if (selectedImage) {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(`profile/${currentUser.id}.${randomNumber}`, selectedImage);

      if (error) {
        console.error("Error uploading image:", error.message);
      } else {
        console.log("Image uploaded successfully:", data);
        setImageUrl(data.Key);
      }
    }
  };

  const handleEditSummary = () => {
    setIsEditing(true);
  };

  const handleSaveSummary = async () => {
    setIsEditing(false);
    try {
      const response = await axios.post("/api/summary", {
        summary: summary,
        id: currentUser.id,
        email: currentUser.email,
      });
      setSummary(response.data.summary);
      console.log(response);
    } catch (error) {
      console.error("Error updating summary:", error.message);
    }
  };

  return (
    <div className="profile container">
      <div className="profileabout">
        <h1 className="heading__h2">Welcome Back, {currentUser.fullName}</h1>
        <p className="paragraph">username: {currentUser.email}</p>

        <div className="about__summary">
          <div>
            <input
              className="inputFiled"
              type="file"
              ref={imgFileRef}
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <img
              className="profilepic"
              src={imageUrl}
              alt=""
              onClick={() => imgFileRef.current.click()}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="about__summary__text">
            <h3 className="heading__h2">Summary:</h3>
            {isEditing ? (
              <textarea
                className="editSummary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            ) : (
              <p className="paragraph">{currentUser.summary}</p>
            )}

            <div className="button">
              {isEditing ? (
                <button className="btn" onClick={handleSaveSummary}>
                  Save Summary
                </button>
              ) : (
                <button className="btn" onClick={handleEditSummary}>
                  Edit Summary
                </button>
              )}
              {selectedImage && (
                <button className="btn" onClick={handleUpload}>
                  Upload Image
                </button>
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
