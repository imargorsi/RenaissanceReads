import axios from "axios";
import { useState } from "react";

function Register() {
  // creating a state for registration form data

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  // for form error
  const [error, setError] = useState("");

  // creating a function to handle the form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handle not matching passwords

    try {
      const response = await axios.post("/api/register", formData);

      // changeing the state to the new data
      setError(response.data);

      if (response.data === "registration successful, Please Login Now") {
        window.location.href = "/login";
      }
    } catch (error) {
      // changeing the state to the new data
      setError(error.response.data);
    }
  };

  return (
    <div className="container">
      <div className="formmain">
        <h2 className="heading__h2">Register Now!</h2>
        <p className="form__desc">
          To take full advantage of our website and be able to post reviews,
          notes, and other details, Sign Up Now!
        </p>

        <div className="regform">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="inputitem"
              placeholder="Enter Your Full Name"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

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

            <input
              type="password"
              className="inputitem"
              placeholder="Confirm Password"
              id="Cpassword"
              name="Cpassword"
              value={formData.Cpassword}
              onChange={handleChange}
              required
            />

            <p className="form__desc">{error}</p>

            <button className="btn submi__btn" type="submit">
              Sign Up
            </button>

            <p className="form__desc">
              Already have an account? <a href="/login">Login In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Login() {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setloginError] = useState("");

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
      // Making an Axios request
      const response = await axios.post("/api/login", formData);
      console.log("Login successful", response.data);
      setloginError(response.data);

      if (response.data === "login successful") {
        window.location.href = "/profile";
      }
    } catch (error) {
      console.error("Login failed", error);
      setloginError(error.data);
    }
  };

  return (
    <div className="container ">
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

export { Register, Login };
