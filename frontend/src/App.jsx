import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/Header";
import Profile from "./pages/profile";
import { Register } from "./components/Form";
import { Login } from "./components/Form";
import BlogPage from "./pages/BlogPage";
import Library from "./pages/Library";

function App() {
  const userLogin = false;

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="user"
            element={(userLogin && <Profile />) || (!userLogin && <Register />)}
          />

          <Route path="login" element={<Login />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
