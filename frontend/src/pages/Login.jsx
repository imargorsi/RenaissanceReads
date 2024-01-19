import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../context/userContext";
// import { useNavigate } from "react-router-dom";

function Login() {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isLoggedIn, setisLoggedIn } = useContext(UserContext);

  // State to manage form errors
  const [loginError, setLoginError] = useState("");

  // for links and navigation
  // const navigate = useNavigate();

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);

      if (response.data.status === "success") {
        setisLoggedIn(response.data.user.fullName);
      } else {
        setLoginError(response.data);
      }

      console.log(response);
    } catch (error) {
      console.error("Login failed", error);
      setLoginError(error.response?.data || "An error occurred");
    }
  };

  return (
    <div className="container ">
      <div className="formmain">
        <h2 className="heading__h2">
          {!isLoggedIn === false ? `Welcome Back, ${isLoggedIn}` : "Login"}
        </h2>

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

            <p className="form__desc">{loginError}</p>

            <button className="btn submi__btn" type="submit">
              Login
            </button>

            <p className="form__desc">
              Don&apos;t have an account yet?
              <a href="/user"> Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
