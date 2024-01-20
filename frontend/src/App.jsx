import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";
import Library from "./pages/Library";

function App() {
  var userLogin = false;
  // console.log(localStorage.getItem("userLogin"));

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user"
            element={(userLogin && <Profile />) || (!userLogin && <SignUp />)}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
