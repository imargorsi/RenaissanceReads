import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import supabase from "../supabase.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  updateUserSuccess,
  updateUserFailed,
  signOut,
} from "../redux/user/userSlice.js";

function Profile() {
  const randomNumber = Math.floor(Math.random() * 100); // for random number
  const { currentUser } = useSelector((state) => state.user); // to get the current user
  const [selectedImage, setSelectedImage] = useState(null); // so that we know which image is selected
  const [imageUrl, setImageUrl] = useState(currentUser.profile); // for setting the image url and updating the image
  const [isEditing, setIsEditing] = useState(false); // to check if user is edited and updated state accordingly
  const [fullName, setFullName] = useState(currentUser.fullName); // to set the full name of the user
  const [uploadStatus, setUploadStatus] = useState({
    message: "",
    isError: false,
    profileImgStatus: "",
  });

  const dispatch = useDispatch();
  const imgFileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFullName(currentUser.fullName);
  }, [currentUser]);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    } else {
      setImageUrl(currentUser.profile);
    }
  }, [selectedImage, currentUser.profile]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleEditDetails = () => {
    setIsEditing(true);
  };

  const handleSaveDetails = async () => {
    setIsEditing(false);

    try {
      let imageUrl = currentUser.profile;

      if (selectedImage) {
        const { data, error } = await supabase.storage
          .from("images")
          .upload(`profile/${currentUser.id}.${randomNumber}`, selectedImage);

        if (error) {
          console.error("Error uploading image:", error.message);
          setUploadStatus({
            message: "Error uploading image. Please try again.",
            isError: true,
          });
          return;
        }

        imageUrl = `${supabase.storageUrl}/object/public/images/${data.path}`;
        setImageUrl(imageUrl);
        console.log("Image Uploading Successfully:", imageUrl);
      }

      const response = await axios.post("/api/editUser", {
        id: currentUser.id,
        fullName: fullName,
        profile: imageUrl,
      });

      if (response.data.error) {
        console.log("Error updating user details:", response.data.error);
        dispatch(updateUserFailed(response.data.error));
        setUploadStatus({ message: response.data.error, isError: true });
        return;
      }

      dispatch(updateUserSuccess(response.data.user));
      setFullName(response.data.fullName);
      setUploadStatus({
        message: "User details and image uploaded successfully!",
        isError: false,
      });
    } catch (error) {
      console.error("Error updating user details:", error.message);
      dispatch(updateUserFailed(error.message));
      setUploadStatus({ message: error.message, isError: true });
    }
  };

  const handleSigout = async () => {
    try {
      await axios.get("api/sigout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile container">
      <div className="profileabout">
        <h1 className="heading__h2">Welcome Back, {currentUser.fullName}</h1>
        <div className="profiletopbtn">
          <button onClick={handleSigout} className="btn">
            Sign Out
          </button>
          <button
            onClick={() => {
              navigate("/submitbook");
            }}
            className="btn"
          >
            Submit Book
          </button>
        </div>

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

            {isEditing === false ? (
              <img className="profilepic" src={currentUser.profile} alt="" />
            ) : (
              <img
                className="profilepic"
                src={imageUrl}
                alt=""
                onClick={() => imgFileRef.current.click()}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>

          <div className="about__summary__text">
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

            {uploadStatus.isError && (
              <p style={{ color: "red" }}>{uploadStatus.message}</p>
            )}

            <p>{uploadStatus.message}</p>

            <div className="button">
              {isEditing ? (
                <button className="btn" onClick={handleSaveDetails}>
                  Save Details
                </button>
              ) : (
                <button className="btn" onClick={handleEditDetails}>
                  Edit Details
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
