function Login() {
  return (
    <div className="registerform">
      <h2 className="register__title">Login Now!</h2>

      <div className="regform">
        <form className="form" action="/login" method="post">
          <input
            type="email"
            className="inputitem"
            placeholder="Enter Your Email Address"
            id="email"
            name="email"
            required
          />

          <input
            type="password"
            className="inputitem"
            placeholder="Enter Your Password"
            id="password"
            name="password"
            required
          />

          <button className="btn submi__btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <p className="login__btn">
        Dont have an account? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
