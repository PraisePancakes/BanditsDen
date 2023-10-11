import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Navbar, Footer, SubFooter } from "./Components/Index";
import {
  Home,
  About,
  Contact,
  Locations,
  Leaderboards,
  Login,
  Register,
  Profile,
  Smash,
  Fortnite,
  Cod,
  Privacy,
  PrivSettings,
} from "./Pages/Index";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
axios.defaults.withCredentials = true;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth } = useAuth();

  return (
    <div className="APP__CONTAINER max-w-full relative text-white">
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`Menu--Separator ${
          isMenuOpen
            ? "w-full bg-black h-full fixed opacity-50 z-[900]"
            : "hidden"
        } `}
      ></div>
      <section>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </section>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/location" element={<Locations />}></Route>
        <Route path="/leaderboards" element={<Leaderboards />}></Route>

        <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/auth/login" />}
        ></Route>
        <Route
          path="/auth/login"
          element={isAuth ? <Navigate to="/"></Navigate> : <Login />}
        ></Route>
        <Route
          path="/auth/register"
          element={isAuth ? <Navigate to="/"></Navigate> : <Register />}
        ></Route>
        <Route path="/smash" element={<Smash />}></Route>
        <Route path="/fortnite" element={<Fortnite />}></Route>
        <Route path="/cod" element={<Cod />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route
          path="/privSettings"
          element={
            isAuth ? <PrivSettings /> : <Navigate to="/auth/login"></Navigate>
          }
        ></Route>
      </Routes>
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
