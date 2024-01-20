import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  // for form error
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
        navigate("/login");
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

export default SignUp;
