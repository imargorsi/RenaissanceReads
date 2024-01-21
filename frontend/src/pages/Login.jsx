import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinSuccess, signinFailed } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Use Redux state for loginError
  const loginError = useSelector((state) => state.user.error);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);

      if (response.data.status === "success") {
        console.log("Login successful", response.data.user);
        dispatch(signinSuccess(response.data.user));
        // Redirect the user to the desired page after successful login
        navigate("/profile"); // Update with your desired path
      } else {
        // Dispatch the error message to Redux state
        console.log(response.data);
        dispatch(signinFailed(response.data || "Something went wrong"));
      }
    } catch (error) {
      console.error("Login failed", error);
      // Dispatch the error message to Redux state
      dispatch(signinFailed(error.response?.data || "Something went wrong"));
    }
  };

  return (
    <div className="container">
      <div className="formmain">
        <h2 className="heading__h2">Login</h2>

        <div className="regform">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="inputitem"
              placeholder="Enter Your Email Address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="inputitem"
              placeholder="Enter Your Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {loginError && <p className="form__desc">{loginError}</p>}

            <button className="btn submi__btn" type="submit">
              Login
            </button>

            <p className="form__desc">
              Don&apos;t have an account yet?
              <a href="/signup"> Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
