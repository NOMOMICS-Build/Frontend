import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EmailVerification from "./pages/auth/EmailVerification";
import Ecomics from "./components/HomeSections/Ecomics";
import Categories from "./components/HomeSections/Categories";
import Genre from "./components/HomeSections/Genre";
import Library from "./components/HomeSections/Library";
import MarketPlace from "./components/HomeSections/MarketPlace";
import Reelflow from "./components/HomeSections/Reelflow";
import Profile from "./pages/home/Profile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<EmailVerification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ecomics" element={<Ecomics />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/libary" element={<Library />} />
        <Route path="/marketPlace" element={<MarketPlace />} />
        <Route path="/reel" element={<Reelflow />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
