import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/userContextProvider";

import Home from "./pages/Home";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";
import Library from "./pages/Library";

function App() {
  const userLogin = false;

  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
