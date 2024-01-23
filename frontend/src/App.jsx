import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";
import Library from "./pages/Library";
import SubmitBook from "./pages/submitBook";
import FullSingleBook from "./pages/FullSingleBook";
import Reviews from "./components/Reviews";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/review" element={<Reviews />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/submitbook" element={<SubmitBook />} />
            <Route path="/singlebook/:id" element={<FullSingleBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
